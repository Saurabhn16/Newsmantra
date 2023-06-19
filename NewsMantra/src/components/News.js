import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// import { publish } from "gh-pages";
export class News extends Component {
  static defaultProps = {
    country: "india",
    pageSize: 9,
    category: "general",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  constructor(props) {
    super(props);
    console.log("hello i am a constructor from news component :");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    }
    document.title = this.props.category;
  }
  async updateNews() {
    this.props.setProgress(10);
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=51457747f75547e0ab68b52c17b613be&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    // this.setState({loading:true});
    this.updateNews();
  //     this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  // });
}
 
handleNextClick= async ()=>{
  console.log("Next")
  if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){


    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cddf275ff1b34f12893d37f1223a01f7&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
   
    this.setState({
    page:this.state.page+1,
    articles:parsedData.articles,
    loading:false,
  })
 }
}
  handlePrevClick= async ()=>{
    console.log("Previous")

  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cddf275ff1b34f12893d37f1223a01f7&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data=await fetch(url);
   let parsedData=await data.json();
   console.log(parsedData);
   this.setState({
    page:this.state.page-1,
    articles:parsedData.articles,
    loading:false,
   })
}

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center"> NewsMantra -Top Headlines on {this.capitalizeFirstLetter(this.props.category)} </h1>{" "}
        {this.state.loading && <Spinner />}{" "}

        {/* <InfiniteScroll
    dataLength={this.state.items.length}
    next={this.fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    inverse={true} //
    hasMore={this.state.articles.length!==this.state.totalResults}
    loader={<Spinner></Spinner>}
    scrollableTarget="scrollableDiv"
  > */}

<div className="row">
          {" "}
          {
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    newsUrl={element.url}
                    key={element.url}
                    title={element.title ? element.title.slice(0, 45) : ""}
                                     description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                    imageUrl={element.urlToImage}
                  />{" "}

                </div>
              );
            })} {" "}
        </div>{" "}
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev{" "}
          </button>{" "}
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;{" "}
          </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default News;
