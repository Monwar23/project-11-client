import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { Fade } from "react-awesome-reveal";

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
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
                <img src={food.food_image} alt={food.food_name} className="w-full h-56 object-cover" />
                <div className="p-4">
                    <h2 className="text-xl text-rose-400 font-semibold mb-2">{food.food_name}</h2>
                    <p className="text-sm mb-2">{food.food_category}</p>
                    <p className="text-lg font-bold mb-2">${food.price}</p>
                    <p className="text-sm text-gray-600">{food.food_origin}</p>
                </div>
            </div>
        ))}
    </div>
</Fade>

        </div>
    );
};

export default MyAddedFoodItems;