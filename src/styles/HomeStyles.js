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

export const Card = styled(motion.div)`
  width: ${({ selected }) => (selected ? "80%" : "30%")};
  height: 100%;
  margin: 2rem 2rem;
  background-color: #ddd;
  opacity: 0.5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

export const CardText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
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
  font-size: 2rem;
  color: white;
  top: 1rem;
  width: 100%;
  margin: 0;
`;

export const InfoCard = styled.div`
  h2 {
  }
  p {
    font-size: 1.25rem;
    text-align: center;
  }
`;

export const SelectedCard = styled.div`
  display: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    margin: 1rem 0;
    text-align: center;
    font-size: 2rem;
  }
`;
