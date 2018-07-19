import React, { Component } from 'react';

const Title=() => (
  <h2>List of News Clients</h2>
)

class App extends Component {
  state = {
    data: [    {
       title: 'React',
       url: 'https://facebook.github.io/react/',
       author: 'Jordan Walke',
       num_comments: 3,
       points: 4,
       objectID: 0,
   }, {
       title: 'Redux',
       url: 'https://github.com/reactjs/redux',
       author: 'Dan Abramov, Andrew Clark',
       num_comments: 2,
       points: 5,
       objectID: 1,
   }, ]
  }

  addNewClient=() => {
    this.setState({data: [
      //To get the entire list when updating the list (?)
      ...this.state.data,

      //the (standard) new client
       {title: 'Chris',
       url: 'https://www.linkedin.com/in/christian-van-den-broeck-920077150/.',
       author: 'Christian van den Broeck',
       num_comments: 2,
       points: 5,
       objectID: 1,}
    ]})
  }

  render() {
    return (
      <div className="App">
             <Title />

             {/*creating a list with elements from Data.
              .map creates a 'map' so that every list elements has more than one data item */}
      {this.state.data
      .map((i) => <div key={i.title}>
      <li>Title:<a href={i.url}>{i.title}</a></li>
      <li>Author: {i.author}</li>
      <li>Number of comments: {i.num_comments}</li>
      <li>Number of points: {i.points}</li>
      <hr/></div>)}

      {/*to put a button on bottom of the list. arrow statement used*/}
      <button onClick={() => this.addNewClient()}>Add Standard Client</button>
      </div>
    );
  }
}

export default App;
