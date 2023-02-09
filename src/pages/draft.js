import React, { useState } from "react";

export default function shop() {
  //Fetch products from strapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;
  const products = data.products.data;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div>
      <Search>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Search>
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <Gallery>
        {products
          .filter((product) => {
            if (
              selectedCategory &&
              product.attributes.category !== selectedCategory
            ) {
              return false;
            }

            if (
              product.attributes.price < priceRange[0] ||
              product.attributes.price > priceRange[1]
            ) {
              return false;
            }

            return product.attributes.title
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
          .map((product, index) => (
            <Product
              key={product.attributes.slug}
              product={product}
              index={index}
              category={product.attributes.category}
            />
          ))}
      </Gallery>
    </div>
  );

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
  </Gallery>;
}
