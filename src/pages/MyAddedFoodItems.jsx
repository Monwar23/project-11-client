import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { Fade } from "react-awesome-reveal";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const MyAddedFoodItems = () => {

    const [foods, setFoods] = useState([]);
    const { user } = UseAuth()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            });
    }, [user]);

    const handleDelete = _id => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
    
    
            fetch(`https://project-10-server-gray.vercel.app/craftSection/${_id}`,{
              method:'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  setControl(!control)
                }
              })
          }
        });
      }

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
                                <Link to={`/updateFood/${food._id}`}>
                                <button className="mr-2 text-blue-500 hover:text-blue-600 transition duration-300">
                                        <BsPencilSquare />
                                        <span className="tooltip">Edit</span>
                                    </button>
                                </Link>

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