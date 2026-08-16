import React, { useState } from "react"
import { Form, Input, Select, DatePicker, TimePicker, Button } from "antd"
import axios from "axios"

const { TextArea } = Input

const DemoForm = () => {
  const [message, setmessage] = useState("")

  const onFinish = (values) => {
    console.log(values)

    const data = {
      ...values,
      date: values.date ? values.date.format("YYYY-MM-DD") : null,
      time: values.time ? values.time.format("HH:mm") : null,
    }

    axios
      .post(" https://spaceiq.onrender.com/api/DemoRoute/Demo", data)
      .then((res) => {
        console.log(res.data.message)
        setmessage(res.data.message)
      })
      .catch((err) => {
        console.log(err.response?.data?.message || err.message)
        setmessage(err.response?.data?.message || "Something went wrong")
      })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Schedule Your Free Demo
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Fill in the details and our team will contact you shortly.
          </p>

          <h1 className="text-2xl text-green-500">{message}</h1>

          <Form
            layout="vertical"
            className="mt-10"
            requiredMark={false}
            size="large"
            onFinish={onFinish}
          >
            <div className="grid md:grid-cols-2 gap-6">

              <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "please enter your full name",
                  },
                  {
                    pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
                    message: "please enter a valid name",
                  },
                ]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "please enter your phone number",
                  },
                  {
                    pattern: /^[0-9]{10}$/,
                    message: "please enter a valid 10 digit phone number",
                  },
                ]}
              >
                <Input
                  type="tel"
                  placeholder="Enter phone number"
                  maxLength={10}
                />
              </Form.Item>

              <Form.Item
                label="Company"
                name="company"
                rules={[
                  {
                    required: true,
                    message: "please enter your company name",
                  },
                  {
                    pattern: /^[A-Za-z0-9]+(?:[\s&.-][A-Za-z0-9]+)*$/,
                    message: "please enter a valid company name",
                  },
                ]}
              >
                <Input placeholder="Company name" />
              </Form.Item>

              <Form.Item
                label="Industry"
                name="industry"
              >
                <Select
                  placeholder="Select Industry"
                  options={[
                    { value: "Retail", label: "Retail" },
                    { value: "E-commerce", label: "E-commerce" },
                    { value: "Manufacturing", label: "Manufacturing" },
                    { value: "Healthcare", label: "Healthcare" },
                    { value: "Logistics", label: "Logistics" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Warehouse Size"
                name="warehousesize"
              >
                <Select
                  placeholder="Select Size"
                  options={[
                    { value: "Small", label: "Small" },
                    { value: "Medium", label: "Medium" },
                    { value: "Large", label: "Large" },
                    { value: "Enterprise", label: "Enterprise" },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Preferred Date"
                name="date"
              >
                <DatePicker className="w-full" />
              </Form.Item>

              <Form.Item
                label="Preferred Time"
                name="time"
              >
                <TimePicker className="w-full" />
              </Form.Item>

            </div>

            <Form.Item
              label="Additional Notes"
              name="notes"
            >
              <TextArea
                rows={5}
                placeholder="Tell us about your warehouse..."
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="mt-8 w-full h-12 rounded-xl text-base font-semibold bg-blue-600 hover:bg-blue-700"
              >
                Schedule Demo
              </Button>
            </Form.Item>

          </Form>
        </div>
      </div>
    </section>
  )
}

export default DemoForm