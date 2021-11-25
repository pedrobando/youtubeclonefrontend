import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import "./Comments.css";

const Comments = (props) => {
  const comments = props.comments;
  const commentListItems = comments.map((comment) => (
    <li key={comment._id}>
      <span className="thumb">&nbsp;</span>
      <p>{comment.text}<br/>z<span className="likes">200</span></p>
     
      
      <br className="clear" />
    </li>
  ));
  return (
    <div className="comments_wrapper">
      <h4>Video Comments</h4>
      <ul className="comments-list">{commentListItems}</ul>
      <CommentForm videoId={props.videoId} newComment={props.newComment}></CommentForm>
    </div>
  );
};

export default Comments;
