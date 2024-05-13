import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import PurchaseCard from "../components/PurchaseCard";
import UseAuth from "../Hooks/UseAuth";


const OrderedFoodItem = () => {

    const [foods, setFoods] = useState([]);
    const { user } = UseAuth()
    // const [control,setControl]=useState(false)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/purchase/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFoods(data);
            });
    }, [user]);

    return (
        <div>
            <Helmet>
                <title>DineDash | MyOrderedFoodItem</title>
            </Helmet>
            <div className="my-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {
                foods.map(food=><PurchaseCard key={food._id} food={food}></PurchaseCard>)
            }
            </div>
        </div>
    );
};

export default OrderedFoodItem;