import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import Classes from './Commentbutton.css';
import Aux from '../../HOCs/Aux';
import Comment from './Comment';

class NewComment extends Component {
  constructor (props) {
    super(props);
    this.state= {
      content: '',
      comments: this.props.comments
    }
  }
  postDataHandler = () => {
    const data = {
      content: this.state.content,
      articleId: this.props.articleId
    }
    console.log(data);
    axios.post('/newComment/' + this.props.articleId, data)
    .then((response) => {
      const comments=[...this.state.comments, data];
      this.setState({comments: comments})
    })
  }
  render() {
    let comments = null;
    if (this.state.comments) {
     comments = this.state.comments.map((comment, i) => {
      return <Comment 
              content={comment.content}
              key={comment._id} />
    })
    }

    return (
  <Aux>
      {comments}
    <div className='row'>
      <div className='col-md-12'>
        <div className="form-group">
          <textarea className="form-control" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} rows="3"></textarea>
        </div>
      </div>
    </div>
    <div className='row'>
      <div className='col-md-3'>
        <button type="button" className="btn btn-info btn-sm" onClick={this.postDataHandler}>Comment</button>
      </div>
    </div>
  </Aux>
    )
  }

}

export default NewComment;