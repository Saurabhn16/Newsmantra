import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() { let  {title,description,author,date ,imageUrl,newsUrl ,source }=this.props;

    return (
        <div className='my-3'> 
    <div className="card" style={{width: "18rem"}}>
    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left:'90%'}} > {source.name}
     </span>

  <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
  <div className="card-body">
 
    
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-muted">By :- {!author?"Unknown":author}  </small>  </p>
     <p class="card-text"><small class="text-muted">Last update  {new Date(date).toGMTString()}</small></p>

    <a href={newsUrl}  target="_blank" className="btn  bt-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem