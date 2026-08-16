import React, { useState } from "react"
import { Form, Input, Button, Card } from "antd"
import axios from "axios"

const { TextArea } = Input

const ContactForm = () => {
  const [message,setmessage] = useState()
  const onFinish = (values) => {
    console.log(values)
    axios 
    .post("http://localhost:5001/api/ContactRoute/Contact",values)
    .then((res) =>{
          console.log(res.data.message)
          setmessage(res.data.message)
    })
    .catch((err) =>{
      console.log(err.response.data.message)
      setmessage(err.response.data.message)
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <Card className="rounded-2xl shadow-lg border-0"
          title={
            <div className="text-center">
              <p className="text-blue-600 font-semibold uppercase tracking-wider">
                Contact Form
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">
                Contact Us
              </h2>
              <p className="text-gray-600 mt-2">
                Fill out the form below and our team will get back to you as
                soon as possible.
              </p>
            </div>
          }
        >
          <h1 className = "text-2xl text-green-500">{message}</h1>
          <Form
            layout="vertical"
            onFinish={onFinish}
            size="large"
            requiredMark={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}>
                <Input placeholder="John Donnne" />
              </Form.Item>

              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" } ] } >
                <Input placeholder="john@example.com" />
              </Form.Item>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label="Company"
                name="company" >
                <Input placeholder="SpaceIQ Pvt. Ltd." />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  { required: true, message: "Please enter a subject" } ] } >
                <Input placeholder="How can we help?" />
              </Form.Item>
            </div>

            <Form.Item
              label="Message"
              name="message"
              rules={[
                { required: true, message: "Please enter your message" } ] } >
              <TextArea
                rows={6}
                placeholder="Tell us about your warehouse requirements..."/>
            </Form.Item>

            <Form.Item className="mb-0 flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-600 hover:bg-blue-700 border-blue-600 h-12 px-10 rounded-xl text-base font-semibold"> Send </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </section>
  )
}

export default ContactForm