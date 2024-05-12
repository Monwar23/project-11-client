import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { Fade } from "react-awesome-reveal";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyAddedFoodItems = () => {

    const [foods, setFoods] = useState([]);
    const { user } = UseAuth()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            });
    }, [user]);

    return (
        <div>
            <Helmet>
                <title>DineDash | MyAddedFoodItem</title>
            </Helmet>
            <Fade>
                <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {foods.map((food, index) => (
                        <div key={index} className="relative border rounded-lg overflow-hidden shadow-lg">
                            <img src={food.food_image} alt={food.food_name} className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl text-rose-400 font-semibold mb-2">{food.food_name}</h2>
                                <p className="text-sm mb-2">{food.food_category}</p>
                                <p className="text-lg font-bold mb-2">${food.price}</p>
                                <p className="text-sm text-gray-600">{food.food_origin}</p>
                            </div>
                            <div>
                                <div className="absolute bottom-4 right-4 flex">
                                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="mr-2 text-blue-500 hover:text-blue-600 transition duration-300">
                                        <BsPencilSquare />
                                        <span className="tooltip">Edit</span>
                                    </button>

                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-xl text-rose-400 text-center ">Update your Food !</h3>
                                            <form method="dialog"
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    toast('Form submitted!');
                                                }}>
                                                <div className="mb-3">
                                                    <label htmlFor="food_name" className="block font-medium text-rose-400">Food Name</label>
                                                    <input type="text" id="food_name" name="food_name" placeholder="Item Name" required className="mt-1 block w-full rounded-md shadow-sm h-10 px-2 border border-rose-400" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="food_image" className="block font-medium text-rose-400">Food Image</label>
                                                    <input type="url" id="food_image" name="food_image" placeholder="Food Image" className="mt-1 block w-full rounded-md border border-rose-400 shadow-sm h-10 px-2" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="food_category" className="block font-medium text-rose-400">Food Category</label>
                                                    <input type="text" id="food_category" name="food_category" placeholder="Food Category" className="mt-1 block w-full rounded-md border border-rose-400 shadow-sm h-10 px-2" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="Quantity" className="block font-medium text-rose-400">Quantity</label>
                                                    <input type="number" id="Quantity" name="Quantity" placeholder="Quantity" required step="0.01" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border border-rose-400" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="price" className="block font-medium text-rose-400">price</label>
                                                    <input type="number" id="price" name="price" placeholder="Price" step="0.1" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border border-rose-400" />
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="food_origin" className="block font-medium text-rose-400">Food Origin</label>
                                                    <input type="text" id="food_origin" name="food_origin" placeholder="Food Origin" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border border-rose-400" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="short_description" className="block font-medium text-rose-400">Short Description</label>
                                                    <textarea id="short_description" name="short_description" placeholder="Short Description" required rows="3" className="mt-1 block w-full  rounded-md shadow-sm px-2 border border-rose-400"></textarea>
                                                </div>
                                                <div className="modal-action">
                                                    <button className="btn">Update</button>
                                                    <button className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>



                                    <button className="text-red-500 hover:text-red-600 transition duration-300">
                                        <BsTrash />
                                        <span className="tooltip">Delete</span>
                                    </button>
                                </div>
                            </div>
                            <ToastContainer></ToastContainer>
                        </div>
                    ))}
                </div>
            </Fade>

        </div>
    );
};

export default MyAddedFoodItems;