import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";

const Foter = () => {
    return (
       

<footer className="bg-rose-400 text-white dark:bg-gray-900 ">
    <div className="container p-6 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                <div className="flex items-center">
                <div className="text-3xl h-8 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <MdFoodBank />
                </div>
                <Link to="/" className="btn btn-ghost text-xl "><span className="font-bold text-rose-400 -mr-2">Dine</span>Dash</Link>
                </div>

                    <p className="max-w-sm mt-2 dark:text-gray-400 text-white ">Join 5,000+ other and never miss out on new foods, recipes, and more.</p>

                    <div className="flex mt-6 -mx-2">
                        
                    <div className="mr-3 text-2xl">
                    <FaFacebook />
                    </div>
                    <div className="mr-3 text-2xl">
                    <IoLogoGithub />
                    </div>
                    <div className="mr-3 text-2xl">
                    <FaYoutube />
                    </div>
                    <div className="mr-3 text-2xl">
                    <FaInstagram />
                    </div>     
                        
                    </div>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                    <div>
                        <h3 className=" uppercase dark:text-white text-white ">About</h3>
                        <Link to='/' href="#" className="block mt-2 text-sm  dark:text-gray-400 hover:underline text-white ">DineDash</Link>
                        <Link href="#" className="block mt-2 text-sm dark:text-gray-400 hover:underline text-white ">DineDash Community</Link>
                        <Link href="#" className="block mt-2 text-sm hover:underline text-white ">Careers</Link>
                    </div>

                    <div>
                        <h3 className=" uppercase dark:text-white text-white ">Items</h3>
                        <Link href="#" className="block mt-2 text-sm dark:text-gray-400 hover:underline text-white ">Food</Link>
                        <Link href="#" className="block mt-2 text-sm hover:underline text-white ">Recipe</Link>
                        <Link href="#" className="block mt-2 text-sm  dark:text-gray-400 hover:underline text-white ">Hot Item</Link>
                    </div>

                  
                    <div>
                        <h3 className=" uppercase text-white ">Contact</h3>
                        <span className="block mt-2 text-sm text-white  hover:underline">+1 526 654 8965</span>
                        <span className="block mt-2 text-sm text-white  hover:underline">DineDash@email.com</span>
                        <span className="block mt-2 text-sm text-white  hover:underline">230 several state,New York ,USA</span>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div>
            <p className="text-center text-white  dark:text-gray-400">© DineDash 2024 - All rights reserved</p>
        </div>
    </div>
</footer>

    );
};

export default Foter;