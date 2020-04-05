import React, { createElement, useState, useEffect } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import axiosWithAuth from "../utils/axiosWithAuth";
import { PostComments } from "./PostComments";
import { CloseCircleOutlined } from "@ant-design/icons";
import "./styles/_post.css";
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
  const [display, setDisplay] = useState(false);

  const id = localStorage.getItem("id");
  const likesUrl = `https://profilebook3.herokuapp.com/profilebook/likes/${props.data.Post_ID}`;
  const delUrl = `https://profilebook3.herokuapp.com/profilebook/likes/${id}`;

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
        setUserLike(res.data.filter(x => x.Like_User_ID.toString() === id));
      });
      
  }, [action]);

  const deletePost = () => {
    axiosWithAuth()
      .delete(`https://profilebook3.herokuapp.com/profilebook/posts/${props.data.Post_ID}`)
      .then(() => props.setBool(bool => !bool));
  };
  
  const like = () => {
    console.log("user lile", userLike)
    const obj = {
      Like_User_ID: id,
      Like_Type: true
    };
    
    if (userLike.length === 0) {
      axiosWithAuth()
        .post(likesUrl, obj)
        .then(x => setAction(action + 1));
    } else if (userLike[0].Like_Type === 0) {
     
      axiosWithAuth()
        .delete(
          `https://profilebook3.herokuapp.com/profilebook/likes/${userLike[0].Like_ID}`
        )
        .then(() => {
          axiosWithAuth()
            .post(likesUrl, obj)
            .then(() => setAction(action + 1));
        });
    } else {
     
      axiosWithAuth()
        .delete(
          `https://profilebook3.herokuapp.com/profilebook/likes/${userLike[0].Like_ID}`
        )
        .then(() => setAction(action + 1));
    }
  };

  const dislike = () => {
    const obj = {
      Like_User_ID: id,
      Like_Type: false
    };
    if (userLike.length === 0) {
      axiosWithAuth()
        .post(likesUrl, obj)
        .then(x => setAction(action + 1));
    } else if (userLike[0].Like_Type === 1) {
      console.log("hola");
      axiosWithAuth()
        .delete(
          `https://profilebook3.herokuapp.com/profilebook/likes/${userLike[0].Like_ID}`
        )
        .then(() => {
          axiosWithAuth()
            .post(likesUrl, obj)
            .then(() => setAction(action + 1));
        });
    } else {
      axiosWithAuth()
        .delete(
          `https://profilebook3.herokuapp.com/profilebook/likes/${userLike[0].Like_ID}`
        )
        .then(() => setAction(action + 1));
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
    <span onClick={() => setDisplay(!display)} key="comment-basic-reply-to">
      Comments
    </span>
    /* <span onClick={() => setDisplay(!display)} key="comment-basic-reply-to">
      Reply
    </span> */
  ];
  const firstName = props.data.User_First_Name;
  const lastName = props.data.User_Last_Name;

  return (
    <div id="spec">
      {props.data.User_ID.toString() === id ? (
        <Comment
          actions={actions}
          author={
            <a>
              {firstName} {lastName}
            </a>
          }
          content={<p id="postText">{props.data.Post_Text}</p>}
          datetime={
            <Tooltip
              title={moment(props.data.Post_Created_At).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            >
              <span>
                {moment(moment(props.data.Post_Created_At)).fromNow()}
              </span>
              <span>
                <CloseCircleOutlined onClick={deletePost} id="icon" />
              </span>
            </Tooltip>
          }
        />
      ) : (
        <Comment
          actions={actions}
          author={
            <a>
              {firstName} {lastName}
            </a>
          }
          content={<p id="postText">{props.data.Post_Text}</p>}
          datetime={
            <Tooltip
              title={moment(props.data.Post_Created_At).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            >
              <span>
                {moment(moment(props.data.Post_Created_At)).fromNow()}
              </span>
            </Tooltip>
          }
        />
      )}

      {display ? (
        <div>
          <PostComments Post_ID={props.data.Post_ID} />
        </div>
      ) : null}
    </div>
  );
};

export default Post;
