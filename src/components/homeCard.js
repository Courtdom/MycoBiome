import { useStateContext } from "@/lib/context";
import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useState } from "react";
import HeroBanner from "./HeroBanner";
import {
  CardText,
  Card,
  Container,
  CardContainer,
  ImageWrap,
  ImagesContainer,
  CardTitle,
  InfoCard,
  SelectedCard,
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
            src={"/chantrelle_fit.jpg"}
            alt="Chantrelle"
            selected={selectedImage === 1}
            onClick={() => {
              handleImageClick(1);
              setMushroomTitle("Chantrelle");
            }}
          />
          <ImageWrap
            src={"/enoki.jpg"}
            alt="Picture of the author"
            selected={selectedImage === 2}
            onClick={() => {
              handleImageClick(2);
              setMushroomTitle("Enoki");
            }}
          />
          <ImageWrap
            src={"/maitake_fit.jpg"}
            alt="Picture of the author"
            selected={selectedImage === 3}
            onClick={() => {
              handleImageClick(3);
              setMushroomTitle("Maitake");
            }}
          />
          <ImageWrap
            src={"/oyster_fit.jpg"}
            alt="Picture of the author"
            selected={selectedImage === 4}
            onClick={() => {
              handleImageClick(4);
              setMushroomTitle("Oyster");
            }}
          />
        </ImagesContainer>

        <CardContainer>
          <CardTitle>{mushroomTitle}</CardTitle>
          {[1, 2, 3].map((card) => (
            <Card
              key={card}
              selected={card === selectedCard}
              animate={{
                width: card === selectedCard ? "90%" : "15%",
                height: card === selectedCard ? "100%" : "15%",
                zIndex: card === selectedCard ? 2 : 1,
                borderRadius: card === selectedCard ? 10 : 10,
              }}
              onClick={() => {
                if (card === selectedCard) {
                  setSelectedCard(null);
                } else {
                  setSelectedCard(card);
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {card !== selectedCard && (
                <CardText>
                  {card === 1
                    ? "Information"
                    : card === 2
                    ? "Products"
                    : "Health"}
                </CardText>
              )}
              {card === selectedCard && (
                <SelectedCard>
                  <h1>
                    {card === 1
                      ? "Information"
                      : card === 2
                      ? "Products"
                      : "Health"}
                  </h1>
                  {(() => {
                    switch (card) {
                      case 1:
                        return (
                          <InfoCard>
                            {(() => {
                              switch (mushroomTitle) {
                                case "Chantrelle":
                                  // here is where i want to access the data
                                  return <p>{data.ChantrelleInfo[0].desc}</p>;
                                case "Enoki":
                                  return <p>{data.EnokiInfo[0].desc}</p>;
                                case "Maitake":
                                  return <p>{data.MaitakeInfo[0].desc}</p>;
                                case "Oyster":
                                  return <p>{data.OysterInfo[0].desc}</p>;
                                default:
                                  return <p>No information available</p>;
                              }
                            })()}
                          </InfoCard>
                        );
                      case 2:
                        return (
                          <>
                            <p>Information about the second card...</p>
                            <img src="image2.jpg" alt="Image 2" />
                          </>
                        );
                      case 3:
                        return (
                          <>
                            <p>Information about the third card...</p>
                            <img src="image3.jpg" alt="Image 3" />
                          </>
                        );
                      default:
                        return null;
                    }
                  })()}
                </SelectedCard>
              )}
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
}
