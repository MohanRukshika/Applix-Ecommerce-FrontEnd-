import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { BsBagHeartFill } from "react-icons/bs";

export default function BottomNavbar() {
    return (
        <div className="lg:hidden fixed bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-[60px] rounded-2xl bg-[#fdf9d9] text-2xl p-5 text-secondary flex items-center justify-around shadow-lg z-50">

            

            <NavLink
                to="/products"
                className={({ isActive }) =>
                    `p-2 rounded-xl transition-all duration-300 ${
                        isActive
                            ? "bg-secondary text-white scale-110"
                            : "text-secondary"
                    }`
                }
            >
                <BsBagHeartFill />
            </NavLink>

            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `p-2 rounded-xl transition-all duration-300 ${
                        isActive
                            ? "bg-secondary text-white scale-110"
                            : "text-secondary"
                    }`
                }
            >
                <IoHome />
            </NavLink>

            <NavLink
                to="/cart"
                className={({ isActive }) =>
                    `p-2 rounded-xl transition-all duration-300 ${
                        isActive
                            ? "bg-secondary text-white scale-110"
                            : "text-secondary"
                    }`
                }
            >
                <FaCartArrowDown />
            </NavLink>

        </div>
    );
}