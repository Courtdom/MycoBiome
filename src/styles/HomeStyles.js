import styled from "styled-components";
const { motion } = require("framer-motion");

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 105vh;
  flex-direction: column;
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110%;
  height: 100%;

  background-image: url("/forest-bg.jpg");
  background-size: cover;
  background-position: center;
  padding: 5rem 0 0 0;
  position: relative;

  border-radius: 1.5rem;
`;

export const CardImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  text-align: center;
`;

export const ImageWrap = styled.img`
  height: 7.5rem;
  width: 7.5rem;
  border-radius: 50%;
  object-fit: cover;
  display: flex;
  align-items: center;
  margin: 0rem 7.5rem;
  margin-top: 5rem;
  margin-bottom: 3rem;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  transform: ${(props) => (props.selected ? "scale(1.35)" : "none")};
  box-shadow: ${(props) =>
    props.selected
      ? "0 0 30px rgba(0, 0, 0, 0.6)"
      : "0 0 15px rgba(0, 0, 0, 0.4)"};
  &:hover {
    scale: 1.05;
  }
`;
export const ImagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width: 25%;
  height: auto;
`;

export const CardTitle = styled.h2`
  text-align: center;
  position: absolute;
  font-size: 3rem;
  color: white;
  top: 1rem;
  width: 100%;
  margin: 0;
`;
