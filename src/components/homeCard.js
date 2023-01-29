import { motion } from "framer-motion";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95vh;
`;

const CardContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

const Card = styled(motion.div)`
  width: ${({ selected }) => (selected ? "80%" : "30%")};
  height: 100%;
  background-color: #ddd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

const CardText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  font-size: 1.2rem;
  text-align: center;
`;

export default function HomeCard() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Container>
      <CardContainer>
        {[1, 2, 3].map((card) => (
          <Card
            key={card}
            selected={card === selectedCard}
            animate={{
              width: card === selectedCard ? "90%" : "25%",
              height: card === selectedCard ? "100%" : "100%",
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
            <CardText>
              {card === 1 ? "Information" : card === 2 ? "Products" : "Health"}
            </CardText>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
}
