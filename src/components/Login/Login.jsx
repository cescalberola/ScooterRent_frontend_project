import React from "react";
import { Button, Form, Input } from "antd";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  
  const onFinish = (values) => {
    login(values);
    setTimeout(() => {
      navigate("/myaccount");
    }, 1000);
  };
  return (
    <div className="login-container">
      <Form className="login-form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      ><h1>Login</h1>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/../src/components/Login/Login.jsx">register now!</a>
      </Form.Item>
      </Form>
    </div>
  );
};

export default Login;