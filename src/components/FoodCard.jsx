import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {

    const {_id, food_name, food_image, food_category, price,
        Quantity } = food;
    console.log(
        Quantity);
    const uniqueTextColor = '#ff9900';
    return (
        <div className="food-card rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={food_image} alt={food_name} className="w-full h-72" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-rose-400">{food_name}</div>
                <p className="text-gray-700 text-base mb-2">{food_category}</p>
                <p className="text-gray-700 text-base mb-2">${price}</p>
                <p className="text-gray-700 text-base" style={{ color: uniqueTextColor }}>Quantity: {
                    Quantity}</p>
            </div>
            <Link to={`/details/${_id}`} className="flex justify-center">
                <button
                    className=' text-rose-400 py-2 px-3 rounded-lg mb-3  hover:bg-rose-400 hover:text-white hover:border-none font-semibold border border-rose-400 block text-center'
                >
                    See Details
                </button>
            </Link>
        </div>
    );
};

export default FoodCard;
