import React, { createElement, useState, useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import "./styles/_comment.css";

const Post = ({ comment }) => {
  const [action, setAction] = useState(1);

  const id = localStorage.getItem("id");

  useEffect(() => {}, [action]);

  //   const actions = [

  //     <span key="comment-basic-reply-to">Reply to</span>
  //   ];
  //   const firstName = props.data.User_First_Name;
  //   const lastName = props.data.User_Last_Name;

  return (
    <div id="spec">
      <Comment
        id="comment"
        //   actions={actions}
        author={
          <a>
            {" "}
            {comment.User_First_Name} {comment.User_Last_Name}{" "}
          </a>
        }
        content={
          <p>
           {comment.Comment_Text}
          </p>
        }
        datetime={
          <Tooltip
            title={moment(comment.Comment_Created_At).format(
              "YYYY-MM-DD HH:mm:ss"
            )}
          >
            <span>{moment(moment(comment.Comment_Created_At)).fromNow()}</span>
          </Tooltip>
        }
      />
    </div>
  );
};

export default Post;
