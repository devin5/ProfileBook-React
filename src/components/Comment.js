import React, { createElement, useState, useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import "./styles/_comment.css";
import { CloseCircleOutlined } from "@ant-design/icons";
import axiosWithAuth from "../utils/axiosWithAuth";

const Co = ({ comment, setBool }) => {
  const [action, setAction] = useState(1);

  const id = localStorage.getItem("id");

  //   useEffect(() => {}, [action]);

  const deleteComment = () => {
    axiosWithAuth()
      .delete(
        `http://localhost:5503/profilebook/comments/${comment.Comment_ID}`
      )
      .then(() => setBool(bool => !bool));
  };

  //   const actions = [

  //     <span key="comment-basic-reply-to">Reply to</span>
  //   ];
  //   const firstName = props.data.User_First_Name;
  //   const lastName = props.data.User_Last_Name;
  {
    console.log("commment", comment.User_ID, id);
  }
  return (
    <div id="spec">
      {comment.User_ID.toString() === id ? (
        <Comment
          id="comment"
          author={
            <a>
              {" "}
              {comment.User_First_Name} {comment.User_Last_Name}{" "}
            </a>
          }
          content={<p>{comment.Comment_Text}</p>}
          datetime={
            <Tooltip
              title={moment(comment.Comment_Created_At).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            >
              <span>
                {moment(moment(comment.Comment_Created_At)).fromNow()}
              </span>
              <span>
                <CloseCircleOutlined onClick={deleteComment} id="icon" />
              </span>
            </Tooltip>
          }
        />
      ) : (
        <Comment
          id="comment"
          author={
            <a>
              {" "}
              {comment.User_First_Name} {comment.User_Last_Name}{" "}
            </a>
          }
          content={<p>{comment.Comment_Text}</p>}
          datetime={
            <Tooltip
              title={moment(comment.Comment_Created_At).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            >
              <span>
                {moment(moment(comment.Comment_Created_At)).fromNow()}
              </span>
            </Tooltip>
          }
        />
      )}
    </div>
  );
};

export default Co;
