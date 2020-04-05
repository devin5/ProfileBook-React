import React, { useState } from "react";
import { Form, Icon, Input, Button } from "antd";
import "./styles/_textArea.css";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useForm } from "../hooks/useForm";

function AddComment({Post_ID, setBool}) {
  const { TextArea } = Input;
  const [loading, setLoading] = useState(false);
  const [form, change] = useForm();
  const id = localStorage.getItem("id");

  
//   console.log("id", Post_ID)


  const onSubmit = () => {
    setLoading(!loading);


    const commentObj = {
        ...form,
        Comment_User_ID:id
    }
    axiosWithAuth().post(`https://profilebook3.herokuapp.com/profilebook/comments/${Post_ID}`, commentObj)
    .then(x => {
        console.log("success", x)
        setBool((bool) => !bool)
    })

  };

  return (
    <div id="textAreaDiv">
      <TextArea
        onChange={change}
        name="Comment_Text"
        value={form.Comment_Text}
        id="textInput"
      />
      <Button
        onClick={onSubmit}
        id="loadingBTN"
        type="primary"
        loading={loading}
      >
        {loading ? " " : "Submit"}
      </Button>
    </div>
  );
}

// const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(AddComment);

export default AddComment;
