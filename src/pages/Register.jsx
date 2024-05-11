import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {

    const { createUser } = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = data => {
        const { email, password, } = data;

        if (
            !/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
        ) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registration successful!");

                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')
                }, 3000)


            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="hidden lg:block lg:w-1/2">
                <img src="https://i.ibb.co/6cMNPh7/pexels-pixabay-260922.jpg" alt="Background" className="object-cover w-full h-full" />
            </div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">

                <p className="mt-3 text-xl text-center text-rose-400 font-bold dark:text-gray-200">
                    Sign Up Now !
                </p>

                <a href="#" className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-rose-400 hover:text-white">

                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>
                    <span className="w-5/6 px-4 py-3 font-bold text-center ">Sign Up with Google</span>
                </a>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or SignUp with email</p>
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="text-white">Name</label>
                        <input type="text" placeholder="Name" className="input input-bordered w-full" {...register("Name", { required: true })} />
                        {errors.Name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="text-white">Photo URL</label>
                        <input type="text" placeholder="Photo URL" className="input input-bordered w-full" {...register("image", { required: true })} />
                        {errors.image && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="text-white">Email</label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mb-4 relative">
                        <label className="text-white">Password</label>
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="input input-bordered w-full pr-10" {...register("password", { required: true })} />
                        <button className="absolute inset-y-12 right-0 flex items-center pr-3 focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye className="text-black" />}
                        </button>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-6 py-3 text-sm font-medium btn btn-outline text-rose-400 bg-rose-50 hover:bg-rose-400 hover:text-white hover:border-none">
                            Sign Up
                        </button>
                    </div>
                </form>


                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    <Link to='/login' className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign In</Link>
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;