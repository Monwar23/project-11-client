import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyAddedFoodItems from "../pages/MyAddedFoodItems";
import AddFoodItem from "../pages/AddFoodItem";
import OrderedFoodItem from "../pages/OrderedFoodItem";
import AllFood from "../pages/AllFood";
import Update from "../pages/Update";
import PrivateRoutes from "./PrivateRoutes";
import Details from "../pages/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'/allFoods',
            element:<AllFood></AllFood>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/myAddedFoodItem',
            element:<PrivateRoutes><MyAddedFoodItems></MyAddedFoodItems></PrivateRoutes>
        },
        {
            path:'/addFoodItem',
            element:<PrivateRoutes><AddFoodItem></AddFoodItem></PrivateRoutes>
        },
        {
            path:'/myOrderedFoodItem',
            element:<PrivateRoutes><OrderedFoodItem></OrderedFoodItem></PrivateRoutes>
        },
        {
            path:'/updateFood/:id',
            element:<PrivateRoutes><Update></Update></PrivateRoutes>,
            loader:({params})=>fetch(`${import.meta.env.VITE_APP_URL}/foods/${params.id}`)

        },
        {
            path:'/details',
            element:<Details></Details>,

        },
      
      ]
    },
  ]);

  export default router;