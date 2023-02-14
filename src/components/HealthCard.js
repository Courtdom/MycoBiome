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
    props.isOpen ? "translate(0, 2.2rem)" : "translate(20rem, -20rem)"};
`;

const Icon = styled.img`
  height: 7.5rem;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: black;
  margin: 1rem 1rem;
`;

const HealthBenefit = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.25rem;
  background: lightgrey;
  margin: 1rem 1rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
`;

const HealthContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  max-height: 50vh;
  overflow-y: auto;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  padding: 1rem 1rem;
`;

const BenefitContainer = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 1rem; */
`;

const BenefitImage = styled.img`
  height: 8rem;
  width: 8rem;
  margin: 1rem 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  border-radius: 50%;
`;

const BenefitText = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0rem 1rem;
  margin-top: -2rem;
`;

const HealthCard = () => {
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
        {isOpen && <CardTitle layout="position">Health Benefits</CardTitle>}
        {!isOpen && <Icon src="/health_icon.png" />}

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
                    <HealthContainer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 1.5,
                      }}
                    >
                      {Object.values(data["CordycepsHealth"]).map(
                        (benefit, i) => (
                          <HealthBenefit
                            key={i}
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            animate="visible"
                            initial="hidden"
                            transition={{ delay: i * 0.75, duration: 1 }}
                          >
                            <BenefitTitle>{benefit.title}</BenefitTitle>
                            <BenefitContainer>
                              <BenefitImage
                                src={benefit.image[0]}
                                alt={benefit.title}
                              />
                              <BenefitText>{benefit.text}</BenefitText>
                            </BenefitContainer>
                          </HealthBenefit>
                        )
                      )}
                    </HealthContainer>
                  );

                case "Shitake":
                  return (
                    <HealthContainer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 1.5,
                      }}
                    >
                      {Object.values(data["ShitakeHealth"]).map(
                        (benefit, i) => (
                          <HealthBenefit
                            key={i}
                            variants={{
                              hidden: { opacity: 0 },
                              visible: { opacity: 1 },
                            }}
                            animate="visible"
                            initial="hidden"
                            transition={{ delay: i * 0.75, duration: 1 }}
                          >
                            <BenefitTitle>{benefit.title}</BenefitTitle>
                            <BenefitContainer>
                              <BenefitImage
                                src={benefit.image[0]}
                                alt={benefit.title}
                              />
                              <BenefitText>{benefit.text}</BenefitText>
                            </BenefitContainer>
                          </HealthBenefit>
                        )
                      )}
                    </HealthContainer>
                  );

                case "Lion's Mane":
                  return (
                    <HealthContainer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 1.5,
                      }}
                    >
                      {Object.values(data["LionHealth"]).map((benefit, i) => (
                        <HealthBenefit
                          key={i}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          animate="visible"
                          initial="hidden"
                          transition={{ delay: i * 0.75, duration: 1 }}
                        >
                          <BenefitTitle>{benefit.title}</BenefitTitle>
                          <BenefitContainer>
                            <BenefitImage
                              src={benefit.image[0]}
                              alt={benefit.title}
                            />
                            <BenefitText>{benefit.text}</BenefitText>
                          </BenefitContainer>
                        </HealthBenefit>
                      ))}
                    </HealthContainer>
                  );
                case "Oyster":
                  return (
                    <HealthContainer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        duration: 1.5,
                      }}
                    >
                      {Object.values(data["OysterHealth"]).map((benefit, i) => (
                        <HealthBenefit
                          key={i}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          animate="visible"
                          initial="hidden"
                          transition={{ delay: i * 0.75, duration: 1 }}
                        >
                          <BenefitTitle>{benefit.title}</BenefitTitle>
                          <BenefitContainer>
                            <BenefitImage
                              src={benefit.image[0]}
                              alt={benefit.title}
                            />
                            <BenefitText>{benefit.text}</BenefitText>
                          </BenefitContainer>
                        </HealthBenefit>
                      ))}
                    </HealthContainer>
                  );
              }
            })()}
          </CardContent>
        )}
      </Card>
    </Container>
  );
};

export default HealthCard;
