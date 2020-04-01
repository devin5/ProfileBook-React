import React from "react";
import { Spin } from "antd";
import "./styles/_register.css";

export default function Spinner() {
  return (
    <div>
      <Spin size="large" className="ant-spin-dot" />
    </div>
  );
}
