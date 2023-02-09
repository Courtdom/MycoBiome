import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.image`
  width: 100%;
  height: calc(100vh / 3);
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  background-color: blue;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const Header1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Header2 = styled.h2`
  font-size: 2rem;
`;

const about = () => {
  return (
    <div>
      <TextContainer>
        <img src={"/forest-bg.jpg"} alt="forest" />
        <Header1>MycoBiome</Header1>
        <Header2>Bringing you the finest quality mushrooms</Header2>
      </TextContainer>
    </div>
  );
};

export default about;
