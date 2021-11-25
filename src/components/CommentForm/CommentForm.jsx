import React from "react";
import { Form, Button } from "react-bootstrap";
import './CommentForm.css';
import axios from "axios";

const CommentForm = (props) => {
  const comment = props.comment;
  const handleSubmit = event => {
    const commentData = {
      text: comment.text,
      videoid: props.videoId
    }
    props.newComment(commentData)}

     const handleChange = event =>{
        props.setComment({ text: event.target.value});
      }
  return (
    <div className="addComment">
      <h5>Add Comment</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="text">
          <Form.Control as="textarea" rows={3} className="addCommentTxt" onChange={handleChange} />
        </Form.Group>
        <Button
          variant="outline-success"
          className="button-submit"
          type="submit"
        >
          Add Comment
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
