import React from "react";
import { Gallery } from "@/styles/Gallery";
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "@/lib/query";
import Product from "@/components/products";

//added

import { useStateContext } from "@/lib/context";
import styled from "styled-components";

const Search = styled.input`
  font-size: 1.5rem;
  border-radius: 0.2rem;
  font-weight: medium;
  position: fixed;
  left: 2.5rem;
  width: 10rem;
  margin-top: 2rem;
  height: 3rem;
`;

export default function shop() {
  //Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;
  const products = data.products.data;

  const { searchQuery, setSearchQuery } = useStateContext();

  return (
    <div>
      <Search
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Gallery>
        {products
          .filter((products) =>
            products.attributes.title.toLowerCase().includes(searchQuery)
          )
          .map((product, index) => (
            <Product
              key={product.attributes.slug}
              product={product}
              index={index}
            />
          ))}
      </Gallery>
      ;
    </div>
  );
}
