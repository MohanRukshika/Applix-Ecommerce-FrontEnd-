import land from "../assets/land.jpg";
import {Link} from 'react-router-dom'

export default function LandingPage() {

    return (
        <div className="relative w-full h-[calc(100vh-108px)] min-h-[550px] overflow-hidden">

            {/* Background Image */}
            <img
                src={land}
                alt="Landing page"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25"></div>

            {/* Hero Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-5">

                {/* App Name */}
                <h1 className="
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    lg:text-8xl
                    font-bold
                    text-white
                    tracking-wide
                    drop-shadow-lg
                ">
                    Applix
                </h1>

                {/* Tagline */}
                <p className="
                    mt-3
                    text-base
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    font-medium
                    text-white
                    drop-shadow-md
                ">
                    Where Every Room Feels Like Home
                </p>

                {/* Explore Button */}
                <button
                    className="
                        mt-8
                        px-8
                        py-4
                        bg-secondary
                        text-white
                        text-base
                        sm:text-lg
                        font-semibold
                        rounded-full
                        shadow-xl
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:-translate-y-1
                        active:scale-95
                    "
                    style={{
                        animation: "gentleFloat 3s ease-in-out infinite"
                    }}
                >
                    <Link to="/products">Explore Now</Link>
                </button>

                {/* Gentle Floating Animation */}
                <style>
                    {`
                        @keyframes gentleFloat {
                            0%, 100% {
                                transform: translateY(0);
                            }
                            50% {
                                transform: translateY(-6px);
                            }
                        }
                    `}
                </style>

            </div>
        </div>
    );
}