import { useEffect, useState } from "react";

const GetGallery = () => {

    const [feedback, setFeedback] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_URL}/feedback`)
            .then(res => res.json())
            .then(data => {
                setFeedback(data);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10 p-5">
            {
                feedback.map((singleFeedback, index) => (
                    <div key={index} className="relative">
                        <img className="image rounded-lg" src={singleFeedback.imageUrl} alt="Shoes" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex flex-col justify-center items-center">
                            <h2 className="text-white text-lg text-center font-bold">{singleFeedback.username}</h2>
                            <p className="text-white text-center">{singleFeedback.feedback}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default GetGallery;