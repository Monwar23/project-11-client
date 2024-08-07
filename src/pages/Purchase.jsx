import { useLoaderData, useLocation, useNavigate, } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Purchase = () => {

    const [startDate, setStartDate] = useState(new Date());


    const { user } = UseAuth()
    const food = useLoaderData();
    const location = useLocation()
    const navigate = useNavigate()

    const {
        _id,
        food_name,
        food_image,
        food_origin,
        price,
        Quantity,
        name,
        email
    } = food;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user?.email === email) return toast.error('Action not permitted')
        const form = e.target;
        const purchase_food_name = form.food_name.value
        const purchaseQuantity = parseInt(form.purchaseQuantity.value,10)
        if (purchaseQuantity > parseFloat(Quantity)) return toast.error(`You have Purchase this food maximum ${Quantity} food.`)
        const purchase_price = form.price.value
        const purchaseEmail = user.email
        const purchase_name = user.displayName
        const purchase_food_image = food_image
        const purchase_food_origin = food_origin
        const made_name = name
        const buyingDate = startDate
        const foodId=_id

        const info = { purchase_food_name, purchase_price, purchaseQuantity, purchaseEmail, made_name, buyingDate, purchase_food_image, purchase_food_origin, purchase_name,foodId }
        // console.log(info);
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_APP_URL}/purchase`,
                info
            )
            // console.log(data)
            toast.success('purchase Successful!')
            setTimeout(() => {
                navigate(location?.state ? location.state : '/myPurchaseFoodItem')
            }, 2000)
        }
        catch (err) {
            // console.log(err)
            toast.error(err.message)
        }
    }

    return (
        <div>
            <Helmet>
                <title>DineDash | Purchase</title>
            </Helmet>
            <div>
            <div className="bg-cover h-32 bg-center mt-10 mb-10 flex items-center justify-center rounded-xl opacity-85" style={{ backgroundImage: "url('https://i.ibb.co/9HLjhGV/pexels-solliefoto-299347.jpg')" }}>
                <h2 className="text-rose-600 text-4xl font-bold">Purchase Food Now !</h2>
            </div>
                <form onSubmit={handleSubmit} >
                    <div className="grid lg:grid-cols-2 gap-x-10 px-4">
                        <div className="mb-3">
                            <label htmlFor="food_name" className="block font-medium text-rose-400">Food Name</label>
                            <input type="text" id="food_name" name="food_name" placeholder="Food Name" readOnly defaultValue={food_name} required className="mt-1 block w-full rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="block font-medium text-rose-400">Price</label>
                            <input type="number" id="price" name="price" placeholder="Price" readOnly defaultValue={price} step="0.1" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Quantity" className="block font-medium text-rose-400">Quantity</label>
                            <input type="number" id="Quantity" name="purchaseQuantity" placeholder="Quantity" required step="0.01" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="buyingDate"
                                className="block font-medium text-rose-400"
                            >
                                Buying Date
                            </label>

                            <DatePicker className="mt-1 block w-full rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="block font-medium text-rose-400">User Name</label>
                            <input type="text" id="name" name="name" defaultValue={user.displayName} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_email" className="block font-medium text-rose-400">User Email</label>
                            <input type="email" id="email" name="email" defaultValue={user.
                                email} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                    </div>

                    {Quantity > 0 ? (
                        <div className="mb-3 flex justify-center">
                            <button type="submit" className="px-5 py-3 rounded-lg text-sm font-medium text-white bg-rose-400 hover:bg-rose-300 mt-4 mb-10">Purchase Now</button>
                        </div>
                    ) : (
                        <div className="text-center mt-2">
                            <h2 className="text-red-600">This Food is not Available</h2>
                            <div className=" flex justify-center">
                            <button type="button" disabled className="px-5 py-3 rounded-lg text-sm font-medium text-white bg-gray-400 mb-10 mt-4">Out of Stock</button>
                            </div>
                        </div>
                    )}
                </form>
            </div >
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Purchase;