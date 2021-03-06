import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTimeLine } from "../actions/index";
import Post from "./Post";
import AddPost from "./AddPost";

const TimeLine = ({ getTimeLine, posts }) => {
  const [bool, setBool] = useState(false);

  useEffect(() => {
    getTimeLine();
  }, [bool]);

  return (
    <div id="wrapper">
      <AddPost setBool={setBool} />
      {posts.map(x => (
        <Post setBool={setBool} data={x} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    posts: state.posts,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getTimeLine })(TimeLine);
