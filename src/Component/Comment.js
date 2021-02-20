import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://www.flaticon.com/svg/vstatic/svg/3208/3208808.svg?token=exp=1613832454~hmac=dbace589360f51e6cd31bb3e57f89406" alt="Avatar" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.comment.name}</strong>
              <br />
              {this.props.comment.comment}
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default Comment;