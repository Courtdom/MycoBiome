import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useStateContext } from "@/lib/context";
import { useRouter } from "next/router";

const HeroBannerContainer = styled.div`
  width: 120%;
  height: 60vh;
  margin-left: -10rem;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 1.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transition: background-image 0.5s ease-in-out;
`;

const HeroText = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  margin-top: 20rem;
`;

const LearnMoreButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: white;
  border: 5px solid white;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    scale: 1.02;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  }
  &:active {
    scale: 0.95;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
`;

const HeroBanner = () => {
  const { bannerBackgroundImage, setBannerBackgroundImage } = useStateContext();

  const bannerBackgroundImages = [
    "/shop_banner.jpg",
    "/forest_banner.jpg",
    "/recipes_banner.jpg",
  ];
  let index = 0;

  const router = useRouter();

  const handleClick = () => {
    router.push("/shop");
  };

  useEffect(() => {
    const changeBanner = () => {
      setBannerBackgroundImage(bannerBackgroundImages[index]);
      index = (index + 1) % bannerBackgroundImages.length;
      setTimeout(changeBanner, 6000);
    };
    changeBanner();
  }, []);

  return (
    <HeroBannerContainer backgroundImage={bannerBackgroundImage}>
      <HeroText>Find everything in our store</HeroText>
      <LearnMoreButton onClick={handleClick}>shop now</LearnMoreButton>
    </HeroBannerContainer>
  );
};

export default HeroBanner;
