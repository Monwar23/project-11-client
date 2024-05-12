import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";


const AllFood = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods`)
            .then(res => res.json())
            .then(data => {
                setFoods(data)

            })
    }, [])

    return (

        <div>
            <div className="bg-cover h-32 bg-center  flex items-center justify-center rounded-xl opacity-85" style={{backgroundImage: "url('https://i.ibb.co/hRfmJts/pexels-any-lane-5946069.jpg')"}}>
                <h2 className="text-black text-4xl font-bold">All Foods</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-16">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;