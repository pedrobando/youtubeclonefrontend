import React from "react";
import './Comments.css';

const Comments = () => {

    return ( 
        <div className="comments_wrapper">
        <h4>Comments</h4>
            <ul className="comments_list">
                <li>
                    <span className="thumb">&nbsp;</span>
                    <p> Comment Body</p>
                </li>
            </ul>
        </div>
        
     );
}
 
export default Comments;