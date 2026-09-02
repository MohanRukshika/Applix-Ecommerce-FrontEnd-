import { Link, Route, Routes } from "react-router-dom";
import AdminProductPage from "./AdminPages/adminProductPage";
import AddProductPage from "./AdminPages/AddProductPage";
import EditProductPage from "./AdminPages/adminEditPage";
import AdminOrdersPage from "./AdminPages/adminOrderPage";
import logo from "../assets/logo.png";

export default function AdminPage() {
    return (
        <div className="w-full h-screen flex border-[10px] border-accent overflow-hidden">

            {/* SIDEBAR */}
            <div className="w-[300px] h-full bg-accent text-primary flex-shrink-0 overflow-y-auto">

                <img
                    src={logo}
                    className="w-[200px] h-[200px] object-cover rounded-full mx-auto my-5"
                    alt="logo"
                />

                <Link
                    to="/admin/orders"
                    className="block py-3 px-6 hover:bg-[#07434a] font-medium"
                >
                    Orders
                </Link>

                <Link
                    to="/admin/products"
                    className="block py-3 px-6 hover:bg-[#07434a] font-medium"
                >
                    Products
                </Link>

                <Link
                    to="/admin/users"
                    className="block py-3 px-6 hover:bg-[#07434a] font-medium"
                >
                    Users
                </Link>

                <Link
                    to="/admin/reviews"
                    className="block py-3 px-6 hover:bg-[#07434a] font-medium"
                >
                    Reviews
                </Link>

            </div>


            {/* MAIN CONTENT */}
            <div className="flex-1 h-full min-w-0 min-h-0 bg-primary overflow-hidden">

                <Routes>

                    <Route
                        path="/"
                        element={<AdminOrdersPage />}
                    />

                    <Route
                        path="/orders"
                        element={<AdminOrdersPage />}
                    />

                    <Route
                        path="/addProduct"
                        element={<AddProductPage />}
                    />

                    <Route
                        path="/editProduct"
                        element={<EditProductPage />}
                    />

                    <Route
                        path="/users"
                        element={<h1>Users Dashboard</h1>}
                    />

                    <Route
                        path="/products"
                        element={<AdminProductPage />}
                    />

                    <Route
                        path="/reviews"
                        element={<h1>Reviews Dashboard</h1>}
                    />

                </Routes>

            </div>

        </div>
    );
}