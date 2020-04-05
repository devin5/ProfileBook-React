import React, { useState } from "react";
import { Input, Button } from "antd";
import "./styles/_addPost.css";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useForm } from "../hooks/useForm";

function AddPost({ setBool }) {
  const { TextArea } = Input;
  const [form, change, setForm] = useForm();

  const id = localStorage.getItem("id");

  const onSubmit = () => {
    const commentObj = {
      ...form
    };
    axiosWithAuth()
      .post(`https://profilebook3.herokuapp.com/profilebook/posts/${id}`, commentObj)
      .then(x => {
        setForm({});
        setBool(bool => !bool);
      });
  };

  return (
    <div id="textAreaDiv">
      <h1>Add post</h1>
      <TextArea
        onChange={change}
        name="Post_Text"
        value={form.Post_Text}
        id="textInput"
      />

      <Button onClick={onSubmit} id="loadingBTN" type="primary">
        Submit
      </Button>
    </div>
  );
}

// const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(AddComment);

export default AddPost;
