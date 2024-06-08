import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";



const OrderedFoodItem = () => {

    const [foods, setFoods] = useState([]);
    const { user } = UseAuth()
    const [control,setControl]=useState(false)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/purchase/${user?.email}`,{credentials:'include'})
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
    
    
            fetch(`${import.meta.env.VITE_APP_URL}/purchase/${_id}`,{
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
                <title>DineDash | MyOrderedFoodItem</title>
            </Helmet>
            <div className="bg-cover h-32 bg-center mt-10 flex items-center justify-center rounded-xl opacity-85" style={{ backgroundImage: "url('https://i.ibb.co/9HLjhGV/pexels-solliefoto-299347.jpg')" }}>
                <h2 className="text-rose-600 text-4xl font-bold">My Purchase Food Items</h2>
            </div>
            
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {
                    foods.map((food, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
                            <img src={food.purchase_food_image} alt={food.purchase_food_name} className="w-full h-72 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2 text-rose-400">{food.purchase_food_name}</h2>
                                <p className="text-gray-600 mb-2"><strong>Buying Date:</strong> {new Date(food.buyingDate).toLocaleDateString()}</p>
                                <p className="text-gray-600 mb-2"><strong>Price:</strong> ${food.purchase_price}</p>
                                <p className="text-gray-600 mb-2"><strong>Origin:</strong> {food.purchase_food_origin}</p>
                                <p className="text-gray-600 mb-2"><strong>Made by:</strong> {food.made_name}</p>
                                <p className="text-gray-600 mb-2"><strong>Quantity:</strong> {food.purchaseQuantity}</p>
                               <div className="flex justify-end">
                               <button onClick={()=>{
                                        handleDelete(food._id)
                                    }} className="text-red-500 hover:text-red-600 transition duration-300">
                                        <BsTrash />
                                        <span className="tooltip">Delete</span>
                                    </button>
                               </div>
                            </div>
                        </div>
                    )

                    )
                }
            </div>
        </div>
    );
};

export default OrderedFoodItem;