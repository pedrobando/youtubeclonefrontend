import React from "react";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import CommentForm from "../CommentForm/CommentForm";
import "./Comments.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Button } from "react-bootstrap/";

const Comments = (props) => {
  const comments = props.comments;
  const setComment = props.setComments;

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
      event._id
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
        </div>
      </p>
      <br className="clear" />
      {/* <ul><li><span className="thumbS">&nbsp;</span></li>
      <li><span className="thumbS">&nbsp;</span></li></ul> */}
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
      ></CommentForm>
    </div>
  );
};

export default Comments;
