import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
  }

  addComment(e) {
    // Prevent the default behaviour of form submit
    e.preventDefault();

    // Get the value of the comment box
    // and make sure it not some empty strings
    const comment = e.target.elements.comment.value.trim();
    const name = e.target.elements.name.value.trim();

    // Make sure name and comment boxes are filled
    if (name && comment) {
      const commentObject = { name, comment };

      // Publish comment
      /*global Ably*/
      const channel = Ably.channels.get('comments');
      channel.publish('add_comment', commentObject, err => {
        if (err) {
          console.log('Unable to publish message; err = ' + err.message);
        }
      });

      // Clear input fields
      e.target.elements.comment.value = '';
      e.target.elements.name.value = '';
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Tanya-tanya anonim </h1>
        <p>Bebas nanya tanpa harus takut ketahuan</p> <br />
        <form onSubmit={this.addComment}>
          <div className="field">
            <div className="control">
              <input type="text" className="input" name="name" placeholder="Nama pengirim"/>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea className="textarea" name="comment" placeholder="Pertanyaan"></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-primary">Kirim <span role="img" aria-label="sheep"> 🛩️</span></button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;