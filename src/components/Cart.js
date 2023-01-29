import { useStateContext } from "@/lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CartInfo,
  EmptyStyle,
  Checkout,
  Cards,
  CartQuantity,
} from "@/styles/CartStyles";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import getStripe from "@/lib/getStripe";
// ANimation Variants
const card = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { delay: 0.2 } },
};

const cards = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function Cart() {
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  //Payment
  const handleCheckout = async () => {
    const stripePromise = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripePromise.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "50%" }}
        transition={{ type: "tween" }}
        onClick={(e) => e.stopPropagation()}
        layout
      >
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1>Empty Cart</h1>
            <FaShoppingCart />
          </EmptyStyle>
        )}
        <Cards layout variants={cards} initial="hidden" animate="show">
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card layout variants={card} key={item.slug}>
                  <img
                    src={item.image.data.attributes.formats.thumbnail.url}
                    alt={item.title}
                  />
                  <CartInfo>
                    <h2>{item.title}</h2>
                    <h3>€ {item.price}</h3>
                    <CartQuantity>
                      <span>Quantity</span>
                      <button onClick={() => onRemove(item)}>
                        <AiOutlineMinusCircle />
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => onAdd(item, 1)}>
                        <AiOutlinePlusCircle />
                      </button>
                    </CartQuantity>
                  </CartInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout layout>
            <h3>Subtotal: € {totalPrice}</h3>
            <button onClick={handleCheckout}>Checkout</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
}
