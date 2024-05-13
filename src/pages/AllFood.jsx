import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import { Helmet } from "react-helmet";


const AllFood = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/foods`)
            .then(res => res.json())
            .then(data => {
                setFoods(data)
 
            })
    }, [])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/searchFoods?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data)

            })
    }, [search])



    const handleSearch = e => {
        e.preventDefault()
        const text = e.target.search.value
        setSearch(text)

    }

    // console.log(search);



    return (

        <div>
             <Helmet>
                <title>DineDash | All Foods</title>
            </Helmet>
            <div className="bg-cover h-32 bg-center  flex items-center justify-center rounded-xl opacity-85" style={{ backgroundImage: "url('https://i.ibb.co/hRfmJts/pexels-any-lane-5946069.jpg')" }}>
                <h2 className="text-rose-600 text-4xl font-bold">All Foods</h2>
            </div>


            <form onSubmit={handleSearch}  className="max-w-md mx-auto mt-10">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-rose-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="" className="block w-full p-4 ps-10 text-sm text-rose-400 border border-rose-400 rounded-lg focus:ring-rose-400 focus:border-rose-500 " placeholder="Enter Food Name" name="search" required />
                    <button type="submit" className="absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none">Search</button>
                </div>
            </form>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFood;