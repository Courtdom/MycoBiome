import { useStateContext } from "@/lib/context";
import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useState } from "react";
import HeroBanner from "./HeroBanner";
import InfoCard from "./InfoCard";
import HealthCard from "./HealthCard";
import ProductsCard from "./ProductsCard";
import {
  CardImg,
  Card,
  Container,
  CardContainer,
  ImageWrap,
  ImagesContainer,
  CardTitle,
} from "../styles/HomeStyles";
import data from "@/constants/data";

export default function HomeCard() {
  const { mushroomTitle, setMushroomTitle } = useStateContext();
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  return (
    <>
      <HeroBanner />

      <Container>
        <ImagesContainer>
          <ImageWrap
            src={"/cordyceps.jpg"}
            alt="Cordyceps"
            selected={selectedImage === 1}
            onClick={() => {
              handleImageClick(1);
              setMushroomTitle("Cordyceps");
            }}
          />
          <ImageWrap
            src={"/lionmane.jpg"}
            alt="LionsMane"
            selected={selectedImage === 2}
            onClick={() => {
              handleImageClick(2);
              setMushroomTitle("Lion's Mane");
            }}
          />
          <ImageWrap
            src={"/shitake_fit.jpg"}
            alt="Shitake"
            selected={selectedImage === 3}
            onClick={() => {
              handleImageClick(3);
              setMushroomTitle("Shitake");
            }}
          />
          <ImageWrap
            src={"/oyster_fit.jpg"}
            alt="Oyster"
            selected={selectedImage === 4}
            onClick={() => {
              handleImageClick(4);
              setMushroomTitle("Oyster");
            }}
          />
        </ImagesContainer>

        <CardContainer>
          <CardTitle>{mushroomTitle}</CardTitle>
          <InfoCard />
          <HealthCard />
          <ProductsCard />
        </CardContainer>
      </Container>
    </>
  );
}
