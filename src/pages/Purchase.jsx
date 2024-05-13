import { useLoaderData, useLocation, useNavigate,} from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Purchase = () => {

    const { user } = UseAuth() 
    const food = useLoaderData();
    const location = useLocation()
    const navigate = useNavigate()

    const {
        _id,
        food_name,
        price,
        Quantity,
    } = food;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const purchase_food_name = form.food_name.value
        const purchaseQuantity = form.purchaseQuantity.value
        const purchase_price = form.price.value
          const email = user.email
        const name = user.displayName

        const info = { purchase_food_name,purchase_price,purchaseQuantity, email, name }
        console.log(info);
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_APP_URL}/purchase`,
              info
            )
            console.log(data)
            toast.success('purchase Successfully!')
            setTimeout(() => {
                navigate(location?.state ? location.state : '/myPurchaseFoodItem')
            }, 3000)

          }
          catch (err) {
            console.log(err)
          }
    }

    return (
        <div>
            <Helmet>
                <title>DineDash | Purchase</title>
            </Helmet>
            <div>
                <h2 className="text-2xl font-bold mb-4 my-10 text-rose-400 text-center">Purchase Food </h2>
                <form onSubmit={handleSubmit} >
                    <div className="grid lg:grid-cols-2 gap-x-10">
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
                            <label htmlFor="name" className="block font-medium text-rose-400">User Name</label>
                            <input type="text" id="name" name="name" defaultValue={user.displayName} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_email" className="block font-medium text-rose-400">User Email</label>
                            <input type="email" id="email" name="email" defaultValue={user.
                                email} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                    </div>

                    <div className="mb-3 flex justify-center">
                        <button type="submit" className="px-5 py-3 rounded-lg text-sm font-medium text-white bg-rose-400 hover:bg-rose-300 mt-10">Purchase Now</button>
                    </div>
                </form>
            </div >
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Purchase;