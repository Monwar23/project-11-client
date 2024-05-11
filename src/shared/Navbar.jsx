import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

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
                                <Link to='/myAddedFoodItem' className='justify-between'>
                                    My Added Food Items
                                </Link>
                            </li>
                            <li>
                                <Link to='/addFoodItem'>Add A Food Item</Link>
                            </li>
                            <li>
                                <Link to='/myOrderedFoodItem'>My Ordered Food Items</Link>
                            </li>
                            <li className='mt-2'>
                                <button
                                    onClick={handleSignOut}
                                    className='bg-gray-200 block text-center'
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
                {/* <label className="cursor-pointer grid place-items-center ml-3">
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label> */}
            </div>
        </div>
    );
};

export default Navbar;