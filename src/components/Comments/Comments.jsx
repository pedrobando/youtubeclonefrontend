import {React, useState} from "react";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import CommentForm from "../CommentForm/CommentForm";
import "./Comments.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Button, Alert, Collapse } from "react-bootstrap/";

const Comments = (props) => {
  const comments = props.comments;
  const setComment = props.setComments;
  const editReply = props.editReply;
  const [show, setShow] = useState(true);

  const replyForm = () => {
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
  }
  const handleReplyLike = (event, commentId) => {
    editReply(
      {
        like: event.like + 1,
        text: event.text,
        dislike: event.dislike,
      },
      commentId,
      event._id
    );
  };
  const handleReplyDislike = (event, commentId) => {
    editReply(
      {
        dislike: event.dislike + 1,
        text: event.text,
        like: event.like,
      },
      commentId,
      event._id
    );
  };
  const handleLike = (event) => {
    props.editComment(
      {
        like: event.like + 1,
        text: event.text,
        videoid: event.videoid,
      },
      event._id
    );
  };
  const handleDislike = (event) => {
    props.editComment(
      {
        dislike: event.dislike + 1,
        text: event.text,
        videoid: event.videoid,
      },
      event._id,
    );
  };
  
  const commentListItems = comments.map((comment) => (
    <li key={comment._id}>
      <span className="thumb">&nbsp;</span>
      <p>
        {comment.text}
        <br />
        <div className="likes">
          <Button
            onClick={() => handleLike(comment)}
            variant="outline-success"
            size="sm"
          >
          <FaThumbsUp /> {comment.like}
          </Button>
          <Button onClick={() => handleDislike(comment)} variant="outline-warning" size="sm">
            <FaThumbsDown /> {comment.dislike}
          </Button>
            <Button onClick={() => setShow(true)} variant="outline-primary" size="sm">
            Reply
            </Button>
            {replyForm}
        </div>
      </p>
      <br className="clear" />
      <ul className="repliesList">
        {comment.replies.map((reply, index) => (
        <li key={index}>
          <span className="thumbS">&nbsp;</span>
          <div className="replyBody">
            <p>
              {reply.text}
            </p>
            <div className="likes">
            <Button
            onClick={() => handleReplyLike(reply, comment._id)}
            variant="outline-success"
            size="sm"
          >
          <FaThumbsUp /> {reply.like}
          </Button>
          <Button onClick={() => handleReplyDislike(reply, comment._id)} variant="outline-warning" size="sm">
            <FaThumbsDown /> {reply.dislike}
          </Button>
          </div>
          </div>
        </li>
            ))}
      </ul>
    </li>
    
  ));

  return (
    <div className="comments_wrapper">
      <h3 className="video-comments">Video Comments</h3>
      <ul className="comments-list">{commentListItems}</ul>
      <CommentForm
        setComment={props.setComment}
        comment={props.comment}
        videoId={props.videoId}
        newComment={props.newComment}
        getAllComments={props.getAllComments}
      ></CommentForm>
    </div>
  );
};

export default Comments;
