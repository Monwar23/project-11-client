import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const Navbar = () => {
    const { user, logOut } = UseAuth()

    const handleSignOut = () => {
        logOut()

    }

    const navLinks = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-blue-600 border border-blue-600 font-semibold' : 'font-semibold'
        } to="/">Home</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-blue-600 border border-blue-600 font-semibold' : 'font-semibold'
        } to="/allFoods">All Foods</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-blue-600 border border-blue-600 font-semibold' : 'font-semibold'
        } to="/gallery">Gallery</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl "><span className="font-bold text-blue-600 -mr-2">Art</span>Hive</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">

                {user ? (
                    <div className="flex items-center">
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName} className='w-10 rounded-full'>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                <li>
                                    <Link to='/add-job' className='justify-between'>
                                        Add Job
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                                </li>
                                <li>
                                    <Link to='/my-bids'>My Bids</Link>
                                </li>
                                <li>
                                    <Link to='/bid-requests'>Bid Requests</Link>
                                </li>
                            </ul>
                        </div>
        
                        <button onClick={handleSignOut} className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 ml-2 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-blue-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-blue-600 font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Log Out</span>
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/login" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group mr-3">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-blue-600 font-bold transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                        </Link>
                        <Link to="/register" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-blue-600 font-bold transition-colors duration-300 ease-in-out group-hover:text-white">Register</span>
                        </Link>
                    </>
                )}
                <label className="cursor-pointer grid place-items-center ml-3">
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;