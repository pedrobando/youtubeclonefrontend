import React from "react";
import { Form, Button } from "react-bootstrap";
import './CommentForm.css'

const CommentForm = (props) => {
  return (
    <div className="addComment">
      <h5>Add Comment</h5>
      <Form onSubmit={() => props.newComment}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} className="addCommentTxt" />
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
