export default function ContactPage() {
    return (
        <div className="w-full h-full bg-accent flex items-center justify-center px-5 py-6">

            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Left Side */}
                    <div className="bg-secondary text-white p-8 sm:p-10 flex flex-col justify-center">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            Get In Touch
                        </h1>

                        <p className="text-white/80 text-lg leading-relaxed mb-8">
                            Have a question, suggestion, or need help?
                            We'd love to hear from you.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Email
                                </h3>
                                <p className="text-white/80">
                                    support@applix.com
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Phone
                                </h3>
                                <p className="text-white/80">
                                    +94 77 123 4567
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Location
                                </h3>
                                <p className="text-white/80">
                                    Sri Lanka
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="p-8 sm:p-10">
                        <h2 className="text-3xl font-bold text-secondary mb-6">
                            Contact Us
                        </h2>

                        <form className="space-y-5">

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="
                                        w-full
                                        p-3
                                        border
                                        border-gray-300
                                        rounded-lg
                                        outline-none
                                        focus:border-secondary
                                        focus:ring-2
                                        focus:ring-secondary/20
                                    "
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        w-full
                                        p-3
                                        border
                                        border-gray-300
                                        rounded-lg
                                        outline-none
                                        focus:border-secondary
                                        focus:ring-2
                                        focus:ring-secondary/20
                                    "
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Message
                                </label>

                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="
                                        w-full
                                        p-3
                                        border
                                        border-gray-300
                                        rounded-lg
                                        outline-none
                                        resize-none
                                        focus:border-secondary
                                        focus:ring-2
                                        focus:ring-secondary/20
                                    "
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="
                                    w-full
                                    bg-secondary
                                    text-white
                                    py-3
                                    rounded-lg
                                    font-semibold
                                    shadow-md
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                    hover:shadow-lg
                                "
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}