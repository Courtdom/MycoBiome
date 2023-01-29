import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 12px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  resize: none;
`;

const Button = styled(motion.button)`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like sending an email
  };

  return (
    <FormContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        onChange={handleChange}
        value={formData.subject}
      />
      <TextArea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        value={formData.message}
      />
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
}
