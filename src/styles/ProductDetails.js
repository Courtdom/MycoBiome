import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  img {
    height: 65vh;
    border-radius: 0.5rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    margin-right: 5rem;
  }
`;

export const ProductInfo = styled.div`
  width: 50%;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: center;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;

  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  h3 {
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  h2 {
    text-align: center;
    font-size: 1rem;
    font-weight: thin;
    padding: 1rem 0rem;
    width: 90%;
    line-height: 150%;
    overflow: auto;
    max-height: 50vh; /* adjust this value as needed */
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1rem;
    font-weight: medium;
    padding: 1rem 0rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  border: 1rem;
  justify-content: center;

  button {
    background: transparent;

    border: none;
    display: flex;
    font-size: 2rem;
    padding: 0rem 0.5rem;
  }
  p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: thin;
    padding: 0.5rem 0rem;
  }
  span {
    color: var() (--secondary);
    font-size: 1.5rem;
    font-weight: thin;
    padding: 0.5rem 1rem;
  }
  svg {
    color: #494949;
    border-radius: 50%;
    font-size: 2rem;
    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const Buy = styled.button`
  width: 30%;
  height: 10%;
  background: var(--primary);
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
  }
  &:active {
    scale: 0.95;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  p {
    font-weight: medium;
    font-size: 1rem;
  }
`;
