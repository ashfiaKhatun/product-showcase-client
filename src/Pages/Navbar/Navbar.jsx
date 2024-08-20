import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const lists = <>
        <li><NavLink to="/">Home</NavLink></li>

        <p className="ml-4 mr-2 mt-2 text-base">Filter By: </p>
        <li className="ml-2 flex">
            <div className="p-0 flex flex-col md:flex-row gap-4 md:gap-2 mb-2 mt-2 md:mb-0 md:mt-0">
                <select className="select select-bordered h-10">
                    <option disabled selected>Brand</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered h-10">
                    <option disabled selected>Category</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
                <select className="select select-bordered h-10">
                    <option disabled selected>Price</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>
        </li>

        <li className="ml-2 flex">
            <div className="p-0 relative">
                <input type="text" placeholder="Search Here" className="input input-bordered w-48"/>
                <FaSearch className="absolute right-2 md:right-4 "></FaSearch>
            </div>
        </li>
    </>


    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {lists}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">E-Commerce</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {lists}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;