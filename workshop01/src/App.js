import React, { Component } from 'react';
import sampleData from './Data/SampleData';

const Title=() => (
  <h2>List of News Clients</h2>
)

class App extends Component {
  addNewClient=() => {
    /*this.setState({data: [
      //To get the entire list when updating the list (?)
      ...this.state.data,

      //the (standard) new client
       {title: 'Chris',
       url: 'https://www.linkedin.com/in/christian-van-den-broeck-920077150/.',
       author: 'Christian van den Broeck',
       num_comments: 2,
       points: 5,
       objectID: 2,}
    ]})*/
    console.log('jumbo');
  }
  
  render(){
    const {list} = this.state;
    return(
        <table>
            {list.map(article => {
            return (
                <sampleData
                key = {article.objectID}
                article = {article}
                onClick={this.removeItem(article.objectID)}
                />
            );
            })}
        </table>
    )
}

  render() {
    //hiermee kan je alle info zien waarmee je kan werken(?)
    console.log(this)

    return (
      <div className="App">
             <Title />

             {/*creating a list with elements from Data.
              .map creates a 'map' so that every list elements has more than one data item */}
      {this.state.data
      .map((i) => <div key={i.title} id="data">
      <li>Title:<a href={i.url}>{i.title}</a></li>
      <li>Author: {i.author}</li>
      <li>Number of comments: {i.num_comments}</li>      <li>Number of points: {i.points}</li>
      {/*dismiss button (doesn't function yet)*/}
      <button onClick={()=> this.dismissClient()}>Dismiss</button>
      <hr/></div>)}

      {/*to put a button on bottom of the list. arrow statement used*/}
      <button onClick={() => this.addNewClient()}>Add Standard Client</button>
      </div>
    );
  }
}

export default App;
