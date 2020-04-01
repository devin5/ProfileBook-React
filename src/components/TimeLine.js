import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTimeLine } from "../actions/index";
import Post from "./Post";

const TimeLine = ({ getTimeLine, posts }) => {

  useEffect(() => {
    getTimeLine();
  }, []);

  return (
    <>
      {posts.map(x => (
        <Post data={x}/>
      ))}
    </>
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
