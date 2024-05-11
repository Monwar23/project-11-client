import { Helmet } from "react-helmet";
import Swipper from "../../components/Swipper";
import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";

const Home = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods`)
            .then(res => res.json())
            .then(data=>{
                const sortedFoods = data.sort((a, b) => b.purchaseCount - a.purchaseCount);
                setFoods(sortedFoods)
            })
    }, [])

    return (
        <div>
             <Helmet>
                <title>DineDash | Home</title>
            </Helmet>
            <Swipper></Swipper>
            <div>
                {
                    foods.slice(0, 6).map(food=> <FoodCard key={food} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Home;