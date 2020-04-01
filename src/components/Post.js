import React, { createElement, useState, useEffect} from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled
} from "@ant-design/icons";

const Post = props => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [like2, setLikes2] = useState([]);
  const likesUrl = "localhost:5503/profilebook/likes/${}"

  useEffect(()=>{


  })

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {createElement(action === "liked" ? LikeFilled : LikeOutlined, {
          onClick: like
        })}
      </Tooltip>
      <span className="comment-action">{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined,
          {
            onClick: dislike
          }
        )}
      </Tooltip>
      <span className="comment-action">{dislikes}</span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>
  ];
  const firstName = props.data.User_First_Name
  const lastName = props.data.User_Last_Name


  return (
    <Comment
      actions={actions}
      author={<a>{firstName} {lastName}</a>}
      content={
        <p>
          {props.data.Post_Text}
        </p>
      }
      datetime={
        <Tooltip title={moment(props.data.Post_Created_At).format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(moment(props.data.Post_Created_At)).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Post;
