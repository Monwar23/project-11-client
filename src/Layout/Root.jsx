import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Foter from "../shared/Foter";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
          <div className="min-h-[calc(100vh-320px)]">
          <Outlet></Outlet>
          </div>
            <Foter></Foter>
        </div>
    );
};

export default Root;