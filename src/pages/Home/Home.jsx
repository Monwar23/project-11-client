import { Helmet } from "react-helmet";
import Swipper from "../../components/Swipper";
import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import ExtraSection from "../../components/ExtraSection";
import ExtraSection2 from "../../components/ExtraSection2";
import ExtraSection3 from "../../components/ExtraSection3";

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
            <Fade>
                <div className="mt-10">
                    <h2 className="text-3xl text-rose-400 font-bold text-center">Top Foods ! </h2>
                    <p className="text-center mt-4"> Explore the best in food! From timeless favorites to exciting new flavors, our Top Food section is your <br /> go-to for culinary inspiration and delicious discoveries. </p>
                </div>
            </Fade>
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
            <ExtraSection></ExtraSection>
        <ExtraSection2></ExtraSection2>
        <ExtraSection3></ExtraSection3>
        </div>
    );
};

export default Home;
