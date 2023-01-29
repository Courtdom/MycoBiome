import { ProductStyle } from "../styles/ProductStyle";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Product({ product, index }) {
  // Extract the info from props
  const { title, price, image, slug } = product.attributes;
  const delay = index * 0.2;

  return (
    <ProductStyle
      initial={{ opacity: 0, scale: 0.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <div className="content">
        <Link href={`/product/${slug}`}>
          <img
            src={image.data.attributes.formats.small.url}
            alt="mushroom image"
          />
        </Link>
        <h2>{title}</h2>
        <h3>€ {price}</h3>
      </div>
    </ProductStyle>
  );
}
