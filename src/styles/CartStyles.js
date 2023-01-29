import styled from "styled-components";
//Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
`;

export const CartStyle = styled(motion.div)`
  width: 30%;
  background: #f1f1f1;
  padding: 2rem 5rem;
  overflow-y: scroll;
  position: relative;
`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 2rem;
  margin: 2rem 0rem;
  img {
    width: 8rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  }
`;

export const CartInfo = styled(motion.div)`
  width: 50%;
  div {
    display: flex;
    flex-direction: space-between;
  }
  h3 {
    text-align: center;
    font-size: 1.25rem;
    font-weight: thin;
    padding: 0.1rem 0rem;
  }
  h2 {
    text-align: center;
    font-size: 1rem;
    font-weight: thin;
    padding: 0.1rem 0rem;
  }
  svg {
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    }
    &:active {
      scale: 0.95;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const EmptyStyle = styled(motion.div)`
  /* For the empty cart */
  position: absolute;
  top: 0;
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  h1 {
    font-size: 2rem;
    padding: 2rem;
  }
  svg {
    font-size: 8rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
    &:active {
      scale: 0.98;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }
  }
  h3 {
    text-align: center;
    font-size: 1rem;
    font-weight: thin;
    padding: 0.1rem 0rem;
  }
`;

export const Cards = styled(motion.div)``;

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1rem;
    padding: 0rem 0.5rem;
  }
  p {
    text-align: center;
    font-size: 1.25rem;
    font-weight: medium;
    padding: 0.5rem 0rem;
  }
  span {
    color: var() (--secondary);
    font-size: 1rem;
    font-weight: medium;
    padding: 0.15rem 0.5rem;
  }
  svg {
    color: #494949;
  }
`;
