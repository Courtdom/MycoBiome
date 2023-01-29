import styled from "styled-components";
const { motion } = require("framer-motion");

export const ProductStyle = styled(motion.div)`
  position: relative;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  /* Add a new container for the child elements */
  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; /* centers child elements horizontally */
    justify-content: center; /* centers child elements vertically */
  }

  img {
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 75%; /* set max-width to 50% */
    margin: auto; /*  add this to center the img */
    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      scale: 1.01;
    }
  }
  h2 {
    padding: 0.5rem 0rem;
    text-align: center;
  }
  h3 {
    padding: 0.1rem 0rem;
    text-align: center;
  }
`;
