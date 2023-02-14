import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useStateContext } from "@/lib/context";
import data from "@/constants/data";

const Card = styled(motion.div)`
  padding: 0.25rem 2.5rem;
  background: ${(props) => (props.isOpen ? "white" : "transparent")};
  cursor: pointer;
`;

const CardContent = styled(motion.div)`
  width: 60rem;
  height: 30rem;
  p {
    padding-top: 1rem;
    line-height: 150%;
    color: black;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;

  transform: ${(props) =>
    props.isOpen ? "translate(0, 2.2rem)" : "translate(-35rem, -20rem)"};
`;

const Icon = styled.img`
  height: 7.5rem;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: black;
`;
const FlavourImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 2rem;
  margin-right: 3rem;
  background: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  &:first-child {
    margin-right: 5rem;
  }
`;
const MapImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin-top: 2rem;
  margin-right: 3rem;
  background: transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  &:first-child {
    margin-left: 2rem;
  }
`;
const FlavourImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const MapImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const FlavourImageCaption = styled.p`
  font-size: 1.2rem;
  line-height: 85%;
  font-weight: 500;
  text-align: center;
  color: gray;
  margin-top: -0.75rem;
  margin-right: 4rem;

  &:first-child {
    margin-right: 6rem;
  }
`;
const MapImageCaption = styled.p`
  font-size: 1.2rem;
  line-height: 85%;
  font-weight: 500;
  text-align: center;
  color: gray;
  margin-top: -0.75rem;
  margin-right: 2rem;

  &:first-child {
    margin-left: 2rem;
  }
`;

// Info inside card
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 0.75rem 0.75rem;
`;

const Info = styled.p`
  grid-column: ${({ index }) => (index < 2 ? "1" : "2")};
  font-size: 1.1rem;
`;

const InfoCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mushroomTitle, setMushroomTitle, selectedCard, setSelectedCard } =
    useStateContext();

  return (
    <Container
      isOpen={isOpen}
      initial={{ opacity: isOpen ? 1 : 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <Card
        isOpen={isOpen}
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: "2rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {isOpen && <CardTitle layout="position">Infomation</CardTitle>}
        {!isOpen && (
          <Icon
            src="/info_icon.png"
            layout
            transition={{ layout: { duration: 1, type: "spring" } }}
          />
        )}

        {isOpen && (
          <CardContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {(() => {
              switch (mushroomTitle) {
                case "Cordyceps":
                  return (
                    <InfoContainer>
                      <Info key="description" index={1}>
                        <strong>Description:</strong>{" "}
                        {data["CordycepsInfo"].desc}
                      </Info>
                      <Info key="scientificContext" index={2}>
                        <strong>Scientific Context:</strong>{" "}
                        {data["CordycepsInfo"].scientificContext}
                      </Info>
                      <Info key="distribution" index={1}>
                        <strong>Distribution:</strong>{" "}
                        {data["CordycepsInfo"].distribution.text}
                        <MapImageContainer>
                          {data.CordycepsInfo.distribution.images.map(
                            (img, i) => (
                              <div key={i}>
                                <MapImage src={img} alt={`map of ${i + 1}`} />
                                <MapImageCaption>
                                  {img.split("/")[1].split("_")[0]}
                                </MapImageCaption>
                              </div>
                            )
                          )}
                        </MapImageContainer>
                      </Info>

                      <Info key="flavorNotes" index={2}>
                        <strong>Flavor Notes:</strong>{" "}
                        {data["CordycepsInfo"].flavorNotes.text}
                        <FlavourImageContainer>
                          {data.CordycepsInfo.flavorNotes.images.map(
                            (img, i) => (
                              <div key={i}>
                                <FlavourImage
                                  src={img}
                                  alt={`flavor notes image ${i + 1}`}
                                />
                                <FlavourImageCaption>
                                  {data.CordycepsInfo.flavorNotes.images
                                    .length > 1
                                    ? img.split("/")[1].split("_")[0]
                                    : "Caption for Image"}
                                </FlavourImageCaption>
                              </div>
                            )
                          )}
                        </FlavourImageContainer>
                      </Info>
                    </InfoContainer>
                  );

                case "Shitake":
                  return (
                    <InfoContainer>
                      <Info key="description" index={1}>
                        <strong>Description:</strong> {data["ShitakeInfo"].desc}
                      </Info>
                      <Info key="scientificContext" index={2}>
                        <strong>Scientific Context:</strong>{" "}
                        {data["ShitakeInfo"].scientificContext}
                      </Info>
                      <Info key="distribution" index={1}>
                        <strong>Distribution:</strong>{" "}
                        {data["ShitakeInfo"].distribution.text}
                        <MapImageContainer>
                          {data.ShitakeInfo.distribution.images.map(
                            (img, i) => (
                              <div key={i}>
                                <MapImage src={img} alt={`map of ${i + 1}`} />
                                <MapImageCaption>
                                  {img.split("/")[1].split("_")[0]}
                                </MapImageCaption>
                              </div>
                            )
                          )}
                        </MapImageContainer>
                      </Info>

                      <Info key="flavorNotes" index={2}>
                        <strong>Flavor Notes:</strong>{" "}
                        {data["ShitakeInfo"].flavorNotes.text}
                        <FlavourImageContainer>
                          {data.ShitakeInfo.flavorNotes.images.map((img, i) => (
                            <div key={i}>
                              <FlavourImage
                                src={img}
                                alt={`flavor notes image ${i + 1}`}
                              />
                              <FlavourImageCaption>
                                {data.ShitakeInfo.flavorNotes.images.length > 1
                                  ? img.split("/")[1].split("_")[0]
                                  : "Caption for Image"}
                              </FlavourImageCaption>
                            </div>
                          ))}
                        </FlavourImageContainer>
                      </Info>
                    </InfoContainer>
                  );

                case "Lion's Mane":
                  return (
                    <InfoContainer>
                      <Info key="description" index={1}>
                        <strong>Description:</strong> {data["LionInfo"].desc}
                      </Info>
                      <Info key="scientificContext" index={2}>
                        <strong>Scientific Context:</strong>{" "}
                        {data["LionInfo"].scientificContext}
                      </Info>
                      <Info key="distribution" index={1}>
                        <strong>Distribution:</strong>{" "}
                        {data["LionInfo"].distribution.text}
                        <MapImageContainer>
                          {data.LionInfo.distribution.images.map((img, i) => (
                            <div key={i}>
                              <MapImage src={img} alt={`map of ${i + 1}`} />
                              <MapImageCaption>
                                {img.split("/")[1].split("_")[0]}
                              </MapImageCaption>
                            </div>
                          ))}
                        </MapImageContainer>
                      </Info>

                      <Info key="flavorNotes" index={2}>
                        <strong>Flavor Notes:</strong>{" "}
                        {data["LionInfo"].flavorNotes.text}
                        <FlavourImageContainer>
                          {data.LionInfo.flavorNotes.images.map((img, i) => (
                            <div key={i}>
                              <FlavourImage
                                src={img}
                                alt={`flavor notes image ${i + 1}`}
                              />
                              <FlavourImageCaption>
                                {data.LionInfo.flavorNotes.images.length > 1
                                  ? img.split("/")[1].split("_")[0]
                                  : "Caption for Image"}
                              </FlavourImageCaption>
                            </div>
                          ))}
                        </FlavourImageContainer>
                      </Info>
                    </InfoContainer>
                  );
                case "Oyster":
                  return (
                    <InfoContainer>
                      <Info key="description" index={1}>
                        <strong>Description:</strong> {data["OysterInfo"].desc}
                      </Info>
                      <Info key="scientificContext" index={2}>
                        <strong>Scientific Context:</strong>{" "}
                        {data["OysterInfo"].scientificContext}
                      </Info>
                      <Info key="distribution" index={1}>
                        <strong>Distribution:</strong>{" "}
                        {data["OysterInfo"].distribution.text}
                        <MapImageContainer>
                          {data.OysterInfo.distribution.images.map((img, i) => (
                            <div key={i}>
                              <MapImage src={img} alt={`map of ${i + 1}`} />
                              <MapImageCaption>
                                {img.split("/")[1].split("_")[0]}
                              </MapImageCaption>
                            </div>
                          ))}
                        </MapImageContainer>
                      </Info>

                      <Info key="flavorNotes" index={2}>
                        <strong>Flavor Notes:</strong>{" "}
                        {data["OysterInfo"].flavorNotes.text}
                        <FlavourImageContainer>
                          {data.OysterInfo.flavorNotes.images.map((img, i) => (
                            <div key={i}>
                              <FlavourImage
                                src={img}
                                alt={`flavor notes image ${i + 1}`}
                              />
                              <FlavourImageCaption>
                                {img.split("/")[1].split("_")[0]}
                              </FlavourImageCaption>
                            </div>
                          ))}
                        </FlavourImageContainer>
                      </Info>
                    </InfoContainer>
                  );
              }
            })()}
          </CardContent>
        )}
      </Card>
    </Container>
  );
};

export default InfoCard;
