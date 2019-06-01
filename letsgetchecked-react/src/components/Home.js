import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './style.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }
  componentDidMount() {
    axios.get('http://localhost:9001/posts')
    .then(response => {
      this.setState({ posts: response.data });
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    let {posts} = this.state;
    return (
      <div>
        { posts.map((post, i) => {
            return ( 
                <div key={i} className="card">
                  <h1>{post.title}</h1>
                  <p>{post.author}</p>
                  <p>{post.publish_date}</p>
                  <p>{post.description}</p>
                  <Link to={`/posts/${post.id}`}>Read more</Link>
                </div>
            )
          } 
        )}
      </div>
    )
  }
}

export default Home;