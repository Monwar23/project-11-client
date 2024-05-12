import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseAuth from "../Hooks/UseAuth";
import { Fade } from "react-awesome-reveal";

const AddFoodItem = () => {

    const { user } = UseAuth() || {}

    const handleAddFood = e => {
        e.preventDefault()

        const form = e.target;
        const food_image = form.food_image.value
        const food_name = form.food_name.value
        const food_category = form.food_category.value
        const short_description = form.short_description.value
        const Quantity = form.Quantity.value
        const price = form.price.value
       
        const food_origin = form.food_origin.value
        const email = user.email
        const name = user.displayName

        const info = { food_image, food_name, food_category, short_description, Quantity, price, food_origin,  email, name }
        console.log(info);

        fetch('https://project-10-server-gray.vercel.app/addArt&Craft', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    toast('Craft Item Added Successfully')
                }
                form.reset()
            })

    }




    return (
        <div>
            <Helmet>
                <title>DineDash | AddFoodItem</title>
            </Helmet>
            <div className=" p-8 my-10 " style={{ backgroundImage: `url(https://i.ibb.co/PmcW8Wb/pexels-rachel-claire-5491045.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
            <div className="lg:max-w-5xl max-w-xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-rose-400 text-center"><Fade>Add A Food Item</Fade></h2>
                <form onSubmit={handleAddFood}>
                    <div className="grid lg:grid-cols-2 gap-x-10">
                        
                        <div className="mb-3">
                            <label htmlFor="food_name" className="block font-medium text-rose-400">Food Name</label>
                            <input type="text" id="food_name" name="food_name" placeholder="Item Name" required className="mt-1 block w-full rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="food_image" className="block font-medium text-rose-400">Food Image</label>
                            <input type="url" id="food_image" name="food_image" placeholder="Food Image" className="mt-1 block w-full rounded-md border-4 border-rose-400 shadow-sm h-10 px-2" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="food_category" className="block font-medium text-rose-400">Food Category</label>
                            <input type="url" id="food_category" name="food_category" placeholder="Food Category" className="mt-1 block w-full rounded-md border-4 border-rose-400 shadow-sm h-10 px-2" />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="Quantity" className="block font-medium text-rose-400">Quantity</label>
                            <input type="number" id="Quantity" name="Quantity" placeholder="Quantity" required step="0.01" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="block font-medium text-rose-400">price</label>
                            <input type="number" id="price" name="price" placeholder="Price" step="0.1" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="food_origin" className="block font-medium text-rose-400">Food Origin</label>
                            <input type="text" id="food_origin" name="food_origin" placeholder="Food Origin" className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="short_description" className="block font-medium text-rose-400">Short Description</label>
                            <textarea id="short_description" name="short_description" placeholder="Short Description" required rows="3" className="mt-1 block w-full  rounded-md shadow-sm px-2 border-4 border-rose-400"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_email" className="block font-medium text-rose-400">User Email</label>
                            <input type="email" id="email" name="email" defaultValue={user.
                                email} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                        </div>    

                    </div>
                 
                  <div className="mb-3">
                        <label htmlFor="name" className="block font-medium text-rose-400">User Name</label>
                        <input type="text" id="name" name="name" defaultValue={user.displayName} readOnly className="mt-1 block w-full  rounded-md shadow-sm h-10 px-2 border-4 border-rose-400" />
                  </div>
                    <div className="mb-3 flex justify-center">
                        <button type="submit" className="px-5 py-3 rounded-lg text-sm font-medium text-white bg-rose-400 hover:bg-rose-300 mt-10">Add Food</button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
        </div>
    );
};

export default AddFoodItem;