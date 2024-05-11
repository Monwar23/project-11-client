import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { MdFoodBank } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = UseAuth()

    const handleSignOut = () => {
        logOut()

    }

    const navLinks = <>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-rose-400 border border-rose-400 font-semibold' : 'font-semibold'
        } to="/">Home</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-rose-400 border border-rose-400 font-semibold' : 'font-semibold'
        } to="/allFoods">All Foods</NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'text-rose-400 border border-rose-400 font-semibold' : 'font-semibold'
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
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <MdFoodBank />
                </div>
                <Link to="/" className="btn btn-ghost text-xl "><span className="font-bold text-rose-400 -mr-2">Dine</span>Dash</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">

                {user ? (
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
                                <NavLink to='/myAddedFoodItem' className={({ isActive }) =>
                                    isActive ? 'text-rose-400 border border-rose-400 font-semibold' : 'font-semibold'
                                }>
                                    My Added Food Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'text-rose-400 border border-rose-400 font-semibold' : 'font-semibold'
                                } to='/addFoodItem'>Add A Food Item</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'text-rose-400 border border-rose-400 font-semibold' : 'font-semibold'
                                } to='/myOrderedFoodItem'>My Ordered Food Items</NavLink>
                            </li>
                            <li className='mt-2'>
                                <button
                                    onClick={handleSignOut}
                                    className=' text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none font-semibold border border-rose-400 block text-center'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to='/login'>
                            <button className="btn btn-outline text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none mr-3 px-6">Login</button>
                        </Link>
                        <Link to='/register'>
                            <button className="btn btn-outline text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none">Register</button>
                        </Link>

                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;