import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "../../styles/ProductDetails";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useStateContext } from "../../lib/context";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProductDetails() {
  //Fetch state variables
  const { qty, increaseQty, decreaseQty, cartItems, onAdd, setQty } =
    useStateContext();

  //Reset Qty
  const resetQuantity = () => {
    setQty(1);
  };

  useEffect(() => {
    resetQuantity();
  }, []);

  //Fetch slug
  const { query } = useRouter();

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...{error.message}</p>;
  //Extract data
  const { title, description, image, price } = data.products.data[0].attributes;

  const notify = () => {
    toast.success(`${title} added to your cart.`, {
      duration: 1500,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <DetailsStyle>
        <img src={image.data.attributes.formats.medium.url} alt={title} />
        <ProductInfo>
          <h3>{title}</h3>
          <h2>{description}</h2>
          <Quantity>
            <span>Quantity</span>
            <button>
              <AiOutlineMinusCircle onClick={() => decreaseQty(qty)} />
            </button>
            <p>{qty}</p>
            <button>
              <AiOutlinePlusCircle onClick={() => increaseQty(qty)} />
            </button>
          </Quantity>
          <Buy
            onClick={() => {
              onAdd(data.products.data[0].attributes, qty);
              notify();
            }}
          >
            <p>Add to cart</p>
          </Buy>
        </ProductInfo>
      </DetailsStyle>
    </motion.div>
  );
}
