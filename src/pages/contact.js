import { motion } from "framer-motion";
import styled from "styled-components";
import {
  HeadText,
  ContactCards,
  ContactCard,
  ContactForm,
  Flex,
} from "@/styles/ContactStyles";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function contact() {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cbz99wo",
        "template_fnsr7ii",
        refForm.current,
        "dRC32FkjslrSA40oy"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <HeadText>
        Contact us
        <br />
        start your myco journey today
      </HeadText>

      <ContactCards>
        <ContactCard>
          {/* <img src={images.email} alt="email" /> */}
          <a href="mailto:mcourtnelldev@gmail.com" className="p-text">
            MCourtnellDev@gmail.com
          </a>
        </ContactCard>
        <ContactCard>
          {/* <img src={images.mobile} alt="phone" /> */}
          <a href="tel:+370(657)29818" className="p-text">
            +370 (657) 29818
          </a>
        </ContactCard>
      </ContactCards>

      <ContactForm>
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <Flex>
              <input type="text" name="name" placeholder="Name" required />
            </Flex>
            <Flex>
              <input type="email" name="email" placeholder="Email" required />
            </Flex>
            <Flex>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </Flex>
            <div>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
            <div>
              <input type="submit" className="flat-button" value="SEND" />
            </div>
          </ul>
        </form>
      </ContactForm>
    </>
  );
}
