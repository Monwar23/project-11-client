import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser,googleLogin,
        gitHubLogin,updateUserProfile,setUser,user,loading } = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[navigate,user])


    
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const name=form.name.value
        const photo=form.photo.value
        const password=form.password.value

        if (
            !/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)
        ) {
            toast.error(
                "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
            );
            return;
        }
        try {
            const result=await createUser(email,password)
            await updateUserProfile(name,photo)
            setUser({ ...result?.user, photoURL: photo, displayName: name })

            const {data}=await axios.post(`${import.meta.env.VITE_APP_URL}/jwt`,{
                email:result?.user?.email,
            },{withCredentials:true})
            // console.log(data);

            toast.success('SignUp Successful!')
            setTimeout(() => {
                            navigate(location?.state ? location.state : '/')
                        }, 3000)
        }
        catch (err) {
            // console.log(err);
            toast.error(err.message)
        }
        

    }

    const handleGoogleSignIn=async ()=>{
        try{
            const result=await googleLogin()
           
            const {data}=await axios.post(`${import.meta.env.VITE_APP_URL}/jwt`,{
                email:result?.user?.email,
            },{withCredentials:true})
            // console.log(data);   
            toast.success('SignUp Successful!')
            setTimeout(() => {
                navigate(location?.state ? location.state : '/')
            }, 3000)
        }
        catch (err) {
            // console.log(err);
            toast.error(err.message)
        }
    }
    const handleGitHubSignIn=async ()=>{
        try{
           const result= await gitHubLogin()
           
            const {data}=await axios.post(`${import.meta.env.VITE_APP_URL}/jwt`,{
                email:result?.user?.email,
            },{withCredentials:true})
            // console.log(data);
            toast.success('SignUp Successful!')
            setTimeout(() => {
                navigate(location?.state ? location.state : '/')
            }, 3000)
            
        }
        catch (err) {
            // console.log(err);
            toast.error(err.message)
        }
    }

    
if(user || loading) return

    return (
       <div>
         <Helmet>
                <title>DineDash | SignUp</title>
            </Helmet>
        <div className="flex w-full max-w-sm mx-auto my-16 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
            <div className="hidden lg:block lg:w-1/2">
                <img src="https://i.ibb.co/6cMNPh7/pexels-pixabay-260922.jpg" alt="Background" className="object-cover w-full h-full" />
            </div>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">

                <p className="mt-3 text-xl text-center text-rose-400 font-bold dark:text-gray-200">
                    Sign Up Now !
                </p>

                <button onClick={handleGoogleSignIn} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-rose-400 hover:text-white w-full">

                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>
                    <span className="w-5/6 px-4 py-3 font-bold text-center ">Sign Up with Google</span>
                </button>
                <button onClick={handleGitHubSignIn} className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-rose-400 hover:text-white w-full">

                    <div className="px-4 py-2">
                    <div className="text-xl">
                    <FaGithub />
                    </div>
                    </div>
                    <span className="w-5/6 px-4 py-3 font-bold text-center ">Sign Up with GitHub</span>
                </button>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
                    <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">or SignUp with email</p>
                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="">Name</label>
                        <input type="text" placeholder="Name"
                        name="name" className="input input-bordered w-full" required  />
                        
                    </div>
                    <div className="mb-4">
                        <label className="">Photo URL</label>
                        <input type="text" placeholder="Photo URL"
                        name="photo" className="input input-bordered w-full" required />
                        
                    </div>
                    <div className="mb-4">
                        <label className="">Email</label>
                        <input type="email" placeholder="Email"
                        name="email" className="input input-bordered w-full" required />
                        
                    </div>
                    <div className="mb-4 relative">
                        <label className="">Password</label>
                        <input type={showPassword ? "text" : "password"} placeholder="Password"
                        name="password" className="input input-bordered w-full pr-10" required />
                        <button className="absolute inset-y-12 right-0 flex items-center pr-3 focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash className="text-black" /> : <FaEye className="text-black" />}
                        </button>
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
            </div>
        </div>
       </div>
    );
};

export default Register;
