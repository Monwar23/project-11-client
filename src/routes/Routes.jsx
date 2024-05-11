import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyAddedFoodItems from "../pages/MyAddedFoodItems";
import AddFoodItem from "../pages/AddFoodItem";
import OrderedFoodItem from "../pages/OrderedFoodItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
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
            element:<MyAddedFoodItems></MyAddedFoodItems>
        },
        {
            path:'/addFoodItem',
            element:<AddFoodItem></AddFoodItem>
        },
        {
            path:'/myOrderedFoodItem',
            element:<OrderedFoodItem></OrderedFoodItem>
        },
      
      ]
    },
  ]);

  export default router;