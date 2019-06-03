
import React, { Component } from 'react';

import List from './List';

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      comments: []
    };
  }

  onChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
        comment: '',
        comments: [...this.state.comments, this.state.comment]
    });
  }

  render() {
    return (
      <div>
        <h1>Add comments</h1>
        <form className="add" onSubmit={this.onSubmit}>
            <input value={this.state.comment} onChange={this.onChange} />
            <button>Submit</button>
        </form>
        <List comments={this.state.comments} />
      </div>
    );
  }
}