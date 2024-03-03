import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("i am a constructor from news component");
    this.state={
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/everything?q=apple&from=2024-02-29&to=2024-02-29&sortBy=popularity&apiKey=9f825f4633094ccaa6697d311e4b7dbb";
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }




  render() {
    return (
      <div className="container my-3">
        <h4>NewsMonkey-Top headlines</h4>
        <div className="row">
        {this.state.articles.map((element)=>{

          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title} description={element.description} 
            imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}  
        </div> 
      </div>
    )
  }
}

export default News
