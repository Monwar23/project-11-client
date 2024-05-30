import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>DineDash | Payment</title>
            </Helmet>
            <div className="bg-cover h-32 bg-center flex items-center justify-center rounded-xl opacity-85" style={{ backgroundImage: "url('https://i.ibb.co/9HLjhGV/pexels-solliefoto-299347.jpg')" }}>
                <h2 className="text-rose-500 text-4xl font-bold">Pay Now</h2>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;