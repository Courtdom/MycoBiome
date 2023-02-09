import styled from "styled-components";
const { motion } = require("framer-motion");

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeadText = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  color: #6b9080;
  text-transform: capitalize;
`;

export const ContactCards = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 4em 2rem 2rem;
`;

export const ContactCard = styled.div`
  min-width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fef4f5;

  transition: all 0.3s ease-in-out;

  img {
    width: 40px;
    height: 40px;
    margin: 0 0.7rem;
  }

  p {
    font-weight: 500;
  }
  a {
    text-decoration: none;
    font-weight: 400;
  }
  &:hover {
    box-shadow: 0 0 25px #fef4f5;
  }
`;

export const ContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25rem;
  flex-direction: column;
  margin: 1rem 2rem;

  div {
    width: 100%;

    margin: 0.75rem 0;
    border-radius: 10px;
    cursor: pointer;
    background-color: white;

    transition: all 0.3s ease-in-out;

    input,
    textarea {
      width: 100%;
      padding: 0.95rem;
      border: none;
      border-radius: 7px;
      background-color: var(--primary-color);

      font-family: var(--font-base);
      color: var(--secondary-color);
      outline: none;
    }

    textarea {
      height: 170px;
    }

    &:hover {
      box-shadow: 0 0 25px var(--primary-color);
    }
  }

  button {
    padding: 1rem 2rem;
    border-radius: 10px;
    border: none;
    background-color: #cce3de;

    font-weight: 500;
    color: var(--black-color);
    outline: none;
    margin: 2rem 0 0 0;
    font-family: var(--font-base);

    transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
    cursor: pointer;

    &:hover {
      background-color: #6b9080;
    }
  }
`;
