import { Link } from "react-router-dom";

const ExtraSection2 = () => {
    return (
      <div className="my-10 p-4 ">
          <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/mGYnG2p/pexels-fariphotography-905847.jpg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Ready to order?</h1>
                    <Link>
                    <button className="btn bg-rose-400 border-none text-white">Place A Takeout Order</button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
};

export default ExtraSection2;