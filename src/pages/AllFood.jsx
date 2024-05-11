import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const AllFood = () => {

    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods`)
            .then(res => res.json())
            .then(data=>{
                setFoods(data)
            })
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-16">
            {
                foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
            }
        </div>
    );
};

export default AllFood;