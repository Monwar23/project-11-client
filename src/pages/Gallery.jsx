import { useState } from "react";
import { Helmet } from "react-helmet";
import UseAuth from "../Hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetGallery from "../components/GetGallery";
import { useLocation, useNavigate } from "react-router-dom";



const Gallery = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [modalOpen, setModalOpen] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [imageUrl, setImageUrl] = useState("");
   


    const { user } = UseAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            fetch(`${import.meta.env.VITE_APP_URL}/addFeedback`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ imageUrl, username: user.displayName, feedback })
            });

            setFeedback("");
            setImageUrl("");
            setModalOpen(false);
            toast.success('Feedback added successfully');
        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    };

    const handleModalOpen = () => {
        if (user) {
            setModalOpen(true);
        } else {
            return navigate(location?.state ? location.state : '/login')

        }
    };




    return (
        <div className="my-10">
            <Helmet>
                <title>DineDash | Gallery</title>
            </Helmet>
            <div className="bg-cover h-32 bg-center flex items-center justify-center rounded-xl opacity-85" style={{ backgroundImage: "url('https://i.ibb.co/9HLjhGV/pexels-solliefoto-299347.jpg')" }}>
                <h2 className="text-white text-4xl font-bold">Gallery</h2>
            </div>
            <div className="flex justify-center">
                <button className="px-5 py-3 rounded-lg text-sm font-medium border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none mt-4 " onClick={handleModalOpen}>Add Feedback</button>
            </div>
            <GetGallery></GetGallery>
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md w-96">
                        <h2 className="text-lg font-bold mb-4 text-rose-400">Add Image and Feedback</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-bold text-rose-400">User Name:</label>
                                <input type="text" id="imageUrl" className="w-full border border-rose-400 rounded-md p-2" defaultValue={user?.displayName} readOnly />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="feedback" className="block text-sm font-bold text-rose-400">Feedback:</label>
                                <textarea id="feedback" className="w-full rounded-md p-2 border border-rose-400" value={feedback} onChange={(e) => setFeedback(e.target.value)} required></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="imageUrl" className="block text-sm font-bold text-rose-400">Image URL:</label>
                                <input type="url" id="imageUrl" className="w-full border border-rose-400 rounded-md p-2" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="px-5 py-3 rounded-lg text-sm font-medium border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Gallery;
