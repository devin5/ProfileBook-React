import React from "react";
import "./styles/_register.css";
import { Form, Input, InputNumber, Button, Col, Row } from "antd";
import { DatePicker } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { registerUser } from "../actions/index";
import Spinner from "./Spinner";
import { Alert } from "antd";

function Register({ registerUser, isLoading, error }) {
  const onFinish = values => {
    const obj = { ...values.user };
    obj.User_Birthday = obj.User_Birthday.format("YYYY/MM/DD");
    console.log(obj);
    registerUser(obj);
  };

  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 10
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!"
    },
    number: {
      range: "${label} must be between ${min} and ${max}"
    }
  };

  return (
    <>
      {/* {error && console.log("im error", error.response.data.message)} */}
      {error && <Alert message={error.response.data.message} type="error" />}

      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "User_First_Name"]}
          label="First Name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "User_Last_Name"]}
          label="Last Name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "User_Email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "User_Password"]}
          label="Password"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name={["user", "User_Birthday"]}
          label="Age"
          rules={[
            {
              required: true
            }
          ]}
        >
          <DatePicker defaultValue={moment(moment())} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button loading={isLoading} className="subBtn" htmlType="submit">
            Submit
          </Button>
          {/* {isLoading ? <Spinner /> : null} */}
        </Form.Item>
      </Form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { registerUser })(Register);
