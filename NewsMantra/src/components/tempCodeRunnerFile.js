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
      totalResults: parsedData.totalResul