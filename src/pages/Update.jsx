import { Helmet } from "react-helmet";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {
    const foods=useLoaderData()
    const location = useLocation()
    const navigate = useNavigate()

    const {
        _id,
        food_image,
        food_name,
        food_category,
        short_description,
        price,
        Quantity,
        food_origin } = foods

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const food_image = form.food_image.value
        const food_name = form.food_name.value
        const food_category = form.food_category.value
        const short_description = form.short_description.value
        const price = form.price.value
        const Quantity = form.Quantity.value
        const food_origin = form.food_origin.value

        const foodData = { food_name, food_image, food_category, price, Quantity, short_description, food_origin }
        // console.log(foodData);

        fetch(`${import.meta.env.VITE_APP_URL}/foods/${_id}` ,{
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(foodData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast('Food Item Updated Successfully')
                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/myAddedFoodItem')
                    }, 3000)
                }
            })
    }
    return (
        <div>
             <Helmet>
                <title>DineDash | Update</title>
            </Helmet>
            <form onSubmit={handleUpdate}>
            <div className="mb-3">
                <label htmlFor="food_name" className="block font-medium text-rose-400">Food Name</label>
                <input type="text" id="food_name" name="food_name" defaultValue={food_name} placeholder="Item Name" required className="mt-1 block w-full rounded-md shadow-sm h-10 px-2 border border-rose-400" />
            </div>
            <div className="mb-3">
                <label htmlFor="food_image" className="block font-medium text-rose-400">Food Image</label>
                <input type="url" id="food_image" defaultValue={food_image}  name="food_image" placeholder="Food Image" className="mt-1 block w-full rounded-md border border-rose-400 shadow-sm h-10 px-2" />
            </div>
            <div className="mb-3">
                <label htmlFor="food_category" className="block font-medium text-rose-400">Food Category</label>
                <input type="text" id="food_category" defaultValue={food_category} name="food_category" placeholder="Food Category" className="mt-1 block w-full rounded-md border border-rose-400 shadow-sm h-10 px-2" />
            </div>

            <div className="mb-3">
                <label htmlFor="Quantity" className="block font-medium text-rose-400">Quantity</label>
                <input type="number" id="Quantity" name="Quantity" defaultValue={Quantity} placeholder="Quantity" required step="0.01" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border border-rose-400" />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="block font-medium text-rose-400">price</label>
                <input type="number" id="price" name="price" defaultValue={price} placeholder="Price" step="0.1" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border border-rose-400" />
            </div>

            <div className="mb-3">
                <label htmlFor="food_origin" className="block font-medium text-rose-400">Food Origin</label>
                <input type="text" id="food_origin" defaultValue={food_origin} name="food_origin" placeholder="Food Origin" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border border-rose-400" />
            </div>
            <div className="mb-3">
                <label htmlFor="short_description" className="block font-medium text-rose-400">Short Description</label>
                <textarea id="short_description" name="short_description" defaultValue={short_description} placeholder="Short Description" required rows="3" className="mt-1 block w-full  rounded-md shadow-sm px-2 border border-rose-400"></textarea>
            </div>
            <div className="modal-action">
                <button className="btn">Update</button>
            </div>
        </form>
        <ToastContainer></ToastContainer>
        </div >
    );
};

export default Update;