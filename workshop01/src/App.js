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

  //dismiss button function. Doesn't work like this :')
  /*dismissClient=() => {
    this.setState(
      this.data.remove()
    )
  }*/

  //doesn't work either... 'TypeError: Cannot read property 'parentNode' of null'
  //this came (partially) from stackoverflow
  /*dismissClient=() => {
    var element = document.getElementById('data');
    element.parentNode.removeChild(element);
    return false;
  }*/

  //almost works :'). only dismisses 'React', even if you click dismiss on 'Redux'.
  //after clicking again, react appears again (basicly only 'hides' and 'shows' the first item)
  dismissClient() {
    var element = document.getElementById("data");
    if (element.style.display === "none") {
        element.style.display = "block";
        } else {
           element.style.display = "none";
               }
              }
  
    //almost works :'). only deletes data items from the list item (and after first list item is deleted, an error occurs)
    removeClient()
    {
      var list = document.getElementById("data");
        list.removeChild(list.childNodes[0]);

        this.setState();
      
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
      <li>Number of comments: {i.num_comments}</li>
      <li>Number of points: {i.points}</li>
      {/*dismiss button (doesn't function yet)*/}
      <button onClick={()=> this.removeClient()}>Dismiss</button>
      <hr/></div>)}

      {/*to put a button on bottom of the list. arrow statement used*/}
      <button onClick={() => this.addNewClient()}>Add Standard Client</button>
      </div>
    );
  }

  //filter function found on the internet. Don't know how to alter this to make it work
  filterFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
}

export default App;
