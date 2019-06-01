import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Comments from './Comments';

import './style.scss';



let id = "";

class Post extends React.Component {
  constructor({ match, props }) {
    super(props);
    this.state = {
      post: []
    }
    id = match.params.id;
  }
  componentDidMount() {
   
    axios.get(`http://localhost:9001/posts/${id}`)
    .then(response => {
      this.setState({ post: response.data });
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    
    return (
      <div>
        <div>
            <h1>{this.state.post.id}</h1>
            <h1>{this.state.post.title}ddddd</h1>
        </div>
        <Link to="/">Home</Link>
        <div>
            <Comments />
        </div>
      </div>
    )
  }
}

export default Post;