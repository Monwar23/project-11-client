import { Helmet } from "react-helmet";
import Swipper from "../../components/Swipper";
import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";
import { Link } from "react-router-dom";

const Home = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods`)
            .then(res => res.json())
            .then(data => {
                const sortedFoods = data.sort((a, b) => b.purchase_count - a.purchase_count);
                setFoods(sortedFoods);
            });
    }, []);

    return (
        <div>
             <Helmet>
                <title>DineDash | Home</title>
            </Helmet>
            <Swipper></Swipper>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
                {
                    foods.slice(0,6).map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                    
                }
            </div>
            <div className="mb-10 flex justify-center">
            <Link
              to='/allFoods'
              className='px-5 py-3 rounded-lg text-sm font-medium border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none'
            >
              See All Foods
            </Link>
            </div>
        </div>
    );
};

export default Home;
