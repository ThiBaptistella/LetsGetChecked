import React from 'react';
import axios from 'axios';

import './style.scss';

class Comments extends React.Component {
  constructor({ match, props }) {
    super(props);
    this.state = {
        comments: []
    }
  }
  componentDidMount() {
   
    axios.get(`http://localhost:9001/comments/`)
    .then(response => {
      this.setState({ comments: response.data });
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    let {comments} = this.state;
    return (
      <div>
        { comments.map((comment, i) => {
            return ( 
                <div key={i} className="card">
                  <h1>{comment.user}</h1>
                </div>
            )
          } 
        )}
      </div>
    )
  }
}
export default Comments;