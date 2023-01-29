import { useRouter } from "next/router";
// Specify Stripe secret api key here
const stripe = require("stripe")(
  `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    // access the user session
    const session = getSession(ctx.req, ctx.res);
    const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
    const paymentIntents = await stripe.paymentIntents.list({
      customer: stripeId,
    });
    return { props: { orders: paymentIntents.data } };
  },
});

export default function Profile({ user, orders }) {
  const route = useRouter();

  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          {orders.map((order) => (
            <Order key={order.id}>
              <div>
                <h1>Order Number: {order.id}</h1>
                <p>Total: {formatMoney(order.amount)}</p>
              </div>
              <div>
                <h1>Receipt Email {order.receipt_email}</h1>
              </div>
            </Order>
          ))}
        </div>
        <Logout onClick={() => route.push("/api/auth/logout")}>Log out</Logout>
      </div>
    )
  );
}

const Order = styled.div`
  background: white;
  margin: 2rem 0rem;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 1rem;
  h1 {
    font-size: 1rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    color: var(--secondary);
  }
`;
const Logout = styled.div`
  width: 6rem;
  background: var(--primary);
  color: white;
  font-weight: 500;
  border-radius: 0.5rem;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1);
  align-items: center;
  cursor: pointer;
`;
