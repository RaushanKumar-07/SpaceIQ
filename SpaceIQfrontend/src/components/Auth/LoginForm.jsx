import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from "antd"
import { Link } from "react-router-dom"
import axios from 'axios'
import API_URL from "../../config/api";

const LoginForm = () => {
  const [message,setMessage] = useState()
  const onFinish = (values) => {
    console.log(values)
   
axios
  .post(`${API_URL}/api/LoginRoute/Login`, values)
  .then((res) => {
    console.log(res.data.message);
    console.log(res.data.data);
    setMessage(res.data.message);
  })
  .catch((err) => {
    console.log(err.response?.data?.message || err.message);
    setMessage(err.response?.data?.message || "Login failed");
  });

  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Welcome Back
        </h2>
        <p className="mt-3 text-gray-500">
          Sign in to your SpaceIQ account
        </p>
       
      </div>

       <h1 className="text-2xl text-green-500">{message}</h1>
       
      <Form layout="vertical" size="large" requiredMark={false} onFinish={onFinish}>
        <Form.Item label="Email" name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ] } >
          <Input placeholder="Enter your email" className="rounded-xl h-12"/>
        </Form.Item>

        <Form.Item label="Password" name="password"
          rules={[
            { required: true, message: "Please enter your password" },
          ]} >
          <Input.Password placeholder="Enter your password" className="rounded-xl h-12"/>
        </Form.Item>

        <div className="flex justify-between items-center mb-6">
          <Checkbox>Remember Me</Checkbox>

          <Link to="/forgot-password" className="text-blue-600 hover:text-blue-700 font-medium">
            Forgot Password?
          </Link>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="h-12 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700">
            Login
          </Button>
        </Form.Item>
      </Form>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-blue-600 font-semibold hover:underline" >
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm

