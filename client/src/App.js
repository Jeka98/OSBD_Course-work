import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


state = {
  posts: []
}

componentDidMount() {
  this.getPosts();
}


getPosts = _ => {
  fetch('http://localhost:5000/getposts', {mode: 'cors'})
    .then(response => response.json())
    .then(response => this.setState({posts: response.posts}))
    .catch(err => console.error(err))
}


renderPosts = ({id, title}) => <div key={id}> {title}</div>

  render() {
    const {posts} = this.state;
    return (
      <div className="App">
        {posts.map(this.renderPosts)}
      </div>
    );
  }
}

export default App;
