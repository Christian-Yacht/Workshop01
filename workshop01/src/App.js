import React, { Component } from 'react';

const Title = () => (
  <h2>List of News Clients</h2>
)

class App extends Component {
  state = {
    data: [{
      id: 0,
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    }, {
      id: 1,
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },]
  }

  addNewClient = () => {
    //following line added to give new client new ID. 
    //it looks at ID of last item in list and adds 1.
    const clientId = this.state.data[this.state.data.length-1].id + 1;
    this.setState({
      
      data: [
        //To get the entire list when updating the list (?)
        ...this.state.data,

        //the (standard) new client
        {
          id: clientId,
          title: 'Chris',
          url: 'https://www.linkedin.com/in/christian-van-den-broeck-920077150/.',
          author: 'Christian van den Broeck',
          num_comments: 2,
          points: 5,
          objectID: 1,
        }
      ]
    })
  }

  removeClient = (clientId) => {
    const clients = this.state.data.filter(function(kees) { return kees.id !== clientId});
    this.setState({
      data: clients
    })
  }

  
  
  
  
  
  
  
  
  
  // removeClient = (clientId) => {
  //   const clients = this.state.data.filter(function(client) { return client.id != clientId});
  //   this.setState({
  //     data: clients
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Title />
        {/*creating a list with elements from Data.
              .map creates a 'map' so that every list elements has more than one data item */}
        {this.state.data
          .map((i) => 
            <div key={i.id} className="client">
              <ul>
                <li>Title: {i.id} -- <a href={i.url}>{i.title}</a></li>
                <li>Author: {i.author}</li>
                <li>Number of comments: {i.num_comments}</li>
                <li>Number of points: {i.points}</li>
              </ul>  
              <button onClick={() => this.removeClient(i.id)}>Dismiss</button>
              <hr />
            </div>)
        }

        {/*to put a button on bottom of the list. arrow statement used*/}
        <button onClick={() => this.addNewClient()}>Add Standard Client</button>
      </div>
    );
  }
}

export default App;
