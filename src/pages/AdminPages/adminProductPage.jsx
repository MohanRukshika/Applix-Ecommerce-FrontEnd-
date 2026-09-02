import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import LoadingAnimation from "../../components/LoadingAnimation";
import DeleteFunction from "../../components/deleteComponent";

export default function AdminProductPage() {

    const [products, setProducts] = useState([]);
    const [isProductsAreLoaded, setIsProductsAreLoaded] = useState(false);

    const loadProducts = () => {

        const token = localStorage.getItem("token");

        setIsProductsAreLoaded(false);

        axios.get(
            import.meta.env.VITE_API_URL + "/products",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        )
        .then((response) => {

            setProducts(response.data || []);
            setIsProductsAreLoaded(true);

        })
        .catch((error) => {

            console.log(error);
            setIsProductsAreLoaded(true);

        });
    };


    useEffect(() => {
        loadProducts();
    }, []);


    return (

        <div className="w-full h-full flex flex-col overflow-hidden p-4">

            {/* HEADER */}

            <div className="w-full h-[90px] min-h-[90px] flex-shrink-0 bg-accent text-white flex items-center justify-between rounded-2xl px-7">

                <h1 className="text-xl font-medium">
                    Products
                </h1>

            </div>


            {/* TABLE AREA */}

            <div className="flex-1 min-h-0 w-full p-5 overflow-auto">

                {!isProductsAreLoaded ? (

                    <div className="w-full h-full flex items-center justify-center">
                        <LoadingAnimation />
                    </div>

                ) : (

                    <table className="w-full min-w-[1000px] border-separate border-spacing-0 rounded-xl bg-white shadow-accent shadow-md">

                        <thead className="bg-secondary text-primary">

                            <tr>

                                <th className="px-5 py-4 text-left text-sm font-semibold rounded-tl-xl">
                                    Image
                                </th>

                                <th className="px-5 py-4 text-left text-sm font-semibold">
                                    ProductID
                                </th>

                                <th className="px-5 py-4 text-left text-sm font-semibold">
                                    Name
                                </th>

                                <th className="px-5 py-4 text-left text-sm font-semibold">
                                    Price
                                </th>

                                <th className="px-5 py-4 text-left text-sm font-semibold">
                                    Labeled Price
                                </th>

                                <th className="px-5 py-4 text-left text-sm font-semibold">
                                    Availability
                                </th>

                                <th className="px-5 py-4 text-left text-sm font-semibold">
                                    Stock
                                </th>

                                <th className="px-5 py-4 text-left text-sm font-semibold rounded-tr-xl">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {products.map((item) => (

                                <tr
                                    key={item.productId}
                                    className="bg-white hover:bg-accent/5 transition-colors duration-200"
                                >

                                    <td className="px-5 py-3 border-b border-gray-200">

                                        <img
                                            className="w-[60px] h-[60px] object-cover rounded-md border border-accent"
                                            src={item.image[0]}
                                            alt="product"
                                        />

                                    </td>


                                    <td className="px-5 py-3 text-sm text-secondary/70 border-b border-gray-200">
                                        {item.productId}
                                    </td>


                                    <td className="px-5 py-3 text-sm font-semibold text-secondary border-b border-gray-200">
                                        {item.name}
                                    </td>


                                    <td className="px-5 py-3 text-sm font-bold text-accent border-b border-gray-200">
                                        Rs. {item.price}
                                    </td>


                                    <td className="px-5 py-3 text-sm text-gray-500 line-through border-b border-gray-200">
                                        Rs. {item.labelPrice}
                                    </td>


                                    <td className="px-5 py-3 border-b border-gray-200">

                                        <span
                                            className={`inline-block px-4 py-1 rounded-full text-xs font-medium ${
                                                item.isAvailable
                                                    ? "bg-accent/10 text-accent"
                                                    : "bg-secondary/10 text-secondary"
                                            }`}
                                        >
                                            {item.isAvailable
                                                ? "Available"
                                                : "Not Available"}
                                        </span>

                                    </td>


                                    <td className="px-5 py-3 text-sm font-semibold text-secondary border-b border-gray-200">
                                        {item.stock}
                                    </td>


                                    <td className="px-5 py-3 border-b border-gray-200">

                                        <div className="flex items-center gap-5">

                                            <Link
                                                to="/admin/editProduct"
                                                state={item}
                                            >
                                                <button className="text-[#096e29] cursor-pointer text-xl">
                                                    <FaEdit />
                                                </button>
                                            </Link>


                                            <DeleteFunction
                                                product={item}
                                                refresh={loadProducts}
                                            />

                                        </div>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                )}

            </div>


            {/* ADD PRODUCT BUTTON */}

            <Link
                to="/admin/addProduct"
                className="fixed bottom-6 right-6 z-50 text-5xl text-accent bg-primary hover:bg-accent rounded-full hover:text-primary transition"
            >
                <FiPlusCircle />
            </Link>

        </div>

    );
}