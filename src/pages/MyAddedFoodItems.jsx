import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { Fade } from "react-awesome-reveal";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedFoodItems = () => {

    const [foods, setFoods] = useState([]);
    const { user } = UseAuth()
    const [control,setControl]=useState(false)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods/email/${user?.email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            });
            
    }, [user,control]);

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
    
    
            fetch(`${import.meta.env.VITE_APP_URL}/foods/${_id}`,{credentials:'include'},{
              method:'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                // console.log(data);
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
            <div className="bg-cover h-32 bg-center mt-10 flex items-center justify-center rounded-xl opacity-85" style={{ backgroundImage: "url('https://i.ibb.co/9HLjhGV/pexels-solliefoto-299347.jpg')" }}>
                <h2 className="text-rose-600 text-4xl font-bold">My Added Food Items</h2>
            </div>
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

                                    <button onClick={()=>{
                                        handleDelete(food._id)
                                    }} className="text-red-500 hover:text-red-600 transition duration-300">
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