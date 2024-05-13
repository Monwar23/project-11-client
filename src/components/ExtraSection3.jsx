import { Link } from "react-router-dom";

const ExtraSection3 = () => {
    return (
        <div className="hero min-h-screen my-10 bg-rose-100 py-2 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="lg:col-span-1">
                        <div className="flex items-center justify-center lg:justify-start">
                            <img src="https://i.ibb.co/k1tChNK/tiger-hat.png" className="w-full max-w-md rounded-lg shadow-xl" alt="Tiger Hat" />
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:col-span-1 flex items-center justify-center">
                        <div className="text-center grid lg:grid-cols-2 grid-cols-1">
                            <div>
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-rose-500 mb-2">LUNCH</h2>
                                <p className="text-gray-600">Monday - Sunday: 11 am - 4:00 pm</p>
                            </div>
                            <div className="mb-6">
                                <h2 className="text-3xl font-bold text-rose-500 mb-2">DINNER</h2>
                                <p className="text-gray-600">Sunday - Thursday: 4 pm - 9 pm</p>
                                <p className="text-gray-600">Friday - Saturday: 4 pm - 10 pm</p>
                            </div>
                            </div>
                            
                            <div>
                                <h2 className="text-3xl font-bold text-rose-500 mb-2">LOCATION</h2>
                                <p className="text-gray-600">230 Several State<br />New York, USA</p>
                                <div className="mb-6">
                                <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
                            </div>
                            <div className="mt-8">
                                <button className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded-full">
                                    Large Party reservation
                                </button>
                            </div>
                            <div className="mt-8">
                                <button className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded-full">
                                    Order Online
                                </button>
                            </div>
                            </div>
                          
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection3;
