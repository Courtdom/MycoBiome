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
    props.isOpen ? "translate(0, 2.2rem)" : "translate(-20rem, -20rem)"};
`;

const Icon = styled.img`
  height: 7.5rem;
`;

const CardTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: black;
`;

const ProductsCard = () => {
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
        {isOpen && <CardTitle layout="position">Products</CardTitle>}
        {!isOpen && <Icon src="/shop_icon.png" />}

        {isOpen && (
          <CardContent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              ab at dolores consequatur veritatis natus!
            </p>
          </CardContent>
        )}
      </Card>
    </Container>
  );
};

export default ProductsCard;
