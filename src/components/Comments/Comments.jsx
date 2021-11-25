import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import "./Comments.css";

const Comments = (props) => {
  const comments = props.comments;
  const commentListItems = comments.map((comment) => (
    <li key={comment._id}>
      <span className="thumb">&nbsp;</span>
      <p>{comment.text}<br/><span className="likes">{comment.like} | {comment.dislike}</span></p>
     
      
      <br className="clear" />
      {/* <ul><li><span className="thumbS">&nbsp;</span></li>
      <li><span className="thumbS">&nbsp;</span></li></ul> */}
    </li>
  ));
  return (
    <div className="comments_wrapper">
      <h3 className="video-comments">Video Comments</h3>
      <ul className="comments-list">{commentListItems}</ul>
      <CommentForm setComment={props.setComment} comment={props.comment} videoId={props.videoId} newComment={props.newComment}></CommentForm>
    </div>
  );
};

export default Comments;
