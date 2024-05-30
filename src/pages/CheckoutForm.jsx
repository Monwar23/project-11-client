import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [foods, setFoods] = useState([]);
    const [control, setControl] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const stripe = useStripe();
    const elements = useElements();
    const { user } = UseAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/purchase/${user?.email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setFoods(data);
                } else {
                    setFoods([]);
                }
            })
            .catch(error => {
                console.error("Error fetching foods:", error);
                setFoods([]);
            });
    }, [user, control]);

    useEffect(() => {
        const total = foods.reduce((total, item) => total + (item.price * item.Quantity), 0);
        setTotalPrice(total);
    }, [foods]);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log( res.data.clientSecret);

                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => {
                    console.error("Error creating payment intent:", error);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('Payment error', error);
            setError(error.message);
            return;
        } else {
            console.log('Payment method', paymentMethod);
            setError('');
        }

        if (!clientSecret) {
            setError('Client secret not available.');
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.log('Confirm error', confirmError);
            setError(confirmError.message);
        } else {
            console.log('Payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction ID', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: foods.map(item => item._id),
                    menuItemIds: foods.map(item => item.foodId),
                    status: 'pending',
                };

                const res = await axiosSecure.post('/payments', payment);
                console.log('Payment saved', res.data);
                setControl(!control);
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for the payment",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/');
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="text-rose-400 py-2 px-3 rounded-lg mb-3 hover:bg-rose-400 hover:text-white hover:border-none font-semibold border border-rose-400 block text-center my-4"
                type="submit"
                // disabled={!stripe || !clientSecret}
            >
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
        </form>
    );
};

export default CheckoutForm;
