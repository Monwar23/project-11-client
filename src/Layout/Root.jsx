import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Foter from "../shared/Foter";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Foter></Foter>
        </div>
    );
};

export default Root;