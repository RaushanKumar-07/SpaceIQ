import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config/api";

const RegisterForm = () => {
  const [message,setMessage] = useState()
  const onFinish = (values) => {
    console.log(values);
    axios
  .post(`${API_URL}/api/LoginRoute/Register`, values)
  .then((res) => {
    console.log(res.data.message);
    setMessage(res.data.message);
  })
  .catch((error) => {
    console.error("Registration Error:", error.response?.data || error.message);
    setMessage(error.response?.data?.message || "Registration failed");
  });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">Create an Account</h2>
        <p className="mt-3 text-gray-500">
          Join SpaceIQ and start optimizing your warehouse.
        </p>
      </div>
      <h1 className="text-2xl text-green-500">{message}</h1>
      <Form
        layout="vertical"
        size="large"
        requiredMark={false}
        onFinish={onFinish}
      >
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input
            placeholder="Enter your full name"
            className="rounded-xl h-12"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="Enter your email" className="rounded-xl h-12" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            placeholder="Create a password"
            className="rounded-xl h-12"
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm your password"
            className="rounded-xl h-12"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="h-12 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700"
          >
            Create Account
          </Button>
        </Form.Item>
      </Form>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
