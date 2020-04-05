import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProfile } from "../actions/index";
import Post from "./Post";
import AddPost from "./AddPost";

const Profile = ({ getProfile, profile }) => {
  const id = localStorage.getItem("id");
  const [bool, setBool] = useState(false);

  useEffect(() => {
    getProfile(id);
  }, [bool]);

  return (
    <div id="wrapper">
      <AddPost setBool={setBool} />
      {profile.map(x => (
        <Post setBool={setBool} data={x} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    profile: state.profile,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { getProfile })(Profile);
