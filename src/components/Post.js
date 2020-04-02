import React, { createElement, useState, useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import axiosWithAuth from "../utils/axiosWithAuth";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled
} from "@ant-design/icons";

const Post = props => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(1);
  const [userLike, setUserLike] = useState([]);

  const id = localStorage.getItem("id");
  const likesUrl = `http://localhost:5503/profilebook/likes/${props.data.Post_ID}`;
  const delUrl = `http://localhost:5503/profilebook/likes/${id}`;

  useEffect(() => {
    axiosWithAuth()
      .get(likesUrl)
      .then(res => {
        const likeArr = res.data.filter(x => {
          return x.Like_Type === 1;
        });
        const dislikeArr = res.data.filter(x => {
          return x.Like_Type === 0;
        });
        setLikes(likeArr.length);
        setDislikes(dislikeArr.length);
        setUserLike(res.data.filter(x => x.Like_User_ID !== id));
      });
  }, [action]);

  console.log("userl;egvferwgferwgfeqr", userLike);

  const like = () => {
    const obj = {
      Like_User_ID: id,
      Like_Type: true
    };
    if (userLike.length === 0) {
      axiosWithAuth().post(likesUrl, obj).then(x => setAction(action + 1))
    }
    else if(userLike[0].Like_Type === 0){
      console.log("hola")
      axiosWithAuth().delete(`http://localhost:5503/profilebook/likes/${userLike[0].Like_ID}`)
      .then(() => {
        axiosWithAuth().post(likesUrl, obj).then(() => setAction(action + 1))
      })
    }
    
    else {
      
      axiosWithAuth().delete(`http://localhost:5503/profilebook/likes/${userLike[0].Like_ID}`).then(() => setAction(action + 1))
      
    }
  };

  const dislike = () => {
    const obj = {
      Like_User_ID: id,
      Like_Type: false
    };
    if (userLike.length === 0) {
      axiosWithAuth().post(likesUrl, obj).then(x => setAction(action + 1))
    }
    else if(userLike[0].Like_Type === 1){
      console.log("hola")
      axiosWithAuth().delete(`http://localhost:5503/profilebook/likes/${userLike[0].Like_ID}`)
      .then(() => {
        axiosWithAuth().post(likesUrl, obj).then(() => setAction(action + 1))
      })
    }
    
    else {
      
      axiosWithAuth().delete(`http://localhost:5503/profilebook/likes/${userLike[0].Like_ID}`).then(() => setAction(action + 1))
      
    }
    
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        {createElement(likes ? LikeFilled : LikeOutlined, {
          onClick: like
        })}
      </Tooltip>
      <span className="comment-action">{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        {React.createElement(dislikes ? DislikeFilled : DislikeOutlined, {
          onClick: dislike
        })}
      </Tooltip>
      <span className="comment-action">{dislikes}</span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>
  ];
  const firstName = props.data.User_First_Name;
  const lastName = props.data.User_Last_Name;

  return (
    <Comment
      actions={actions}
      author={
        <a>
          {firstName} {lastName}
        </a>
      }
      content={<p>{props.data.Post_Text}</p>}
      datetime={
        <Tooltip
          title={moment(props.data.Post_Created_At).format(
            "YYYY-MM-DD HH:mm:ss"
          )}
        >
          <span>{moment(moment(props.data.Post_Created_At)).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default Post;
