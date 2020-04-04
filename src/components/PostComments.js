import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Comment from "./Comment";
import AddComment from "./AddComment";
import "./styles/_postComments.css"
export function PostComments({ Post_ID }) {
  const [comments, setComments] = useState([]);
  const [bool, setBool] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5503/profilebook/comments/${Post_ID}`)
      .then(res => {
        setComments(res.data.data.comments);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, [bool]);

  return (
    <>
      {loaded && comments.length === 0 ? (
        <AddComment Post_ID={Post_ID} setBool={setBool} />
      ) : null}
      {comments.map((item, index) => (
        <div id="transit">
          <Comment comment={item} />

          {index === comments.length - 1 ? (
            <AddComment Post_ID={Post_ID} setBool={setBool} />
          ) : null}
        </div>
      ))}
    </>
  );
}
