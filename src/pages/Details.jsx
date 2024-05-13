
import { Link, useLoaderData } from "react-router-dom";
import { FaTag, FaDollarSign, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Details = () => {
  const food = useLoaderData();

  const {
    _id,
    food_image,
    food_name,
    food_category,
    short_description,
    price,
    food_origin,
    name,
  } = food;

  return (
    <div className="card my-10">
      <img
        src={food_image}
        alt={food_name}
        className="card-img-top rounded-full mx-auto"
        style={{ height: "500px", width:"600px" }}
      />
      <div className="card-body items-center">
        <Fade>
        <h5 className="card-title text-rose-400">{food_name}</h5>
        </Fade>
        <p className="card-text">{short_description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item mt-3 flex items-center justify-center gap-3">
           <div className="text-rose-400">
           < FaTag />
            </div> 
            <div>
            Category: {food_category}
            </div>
          </li>
          <li className="list-group-item  mt-3 flex items-center justify-center gap-3">
          <div className="text-rose-400">
           < FaDollarSign />
            </div> Price: ${price}
          </li>
          <li className="list-group-item  mt-3 flex items-center justify-center gap-3">
          <div className="text-rose-400">
           < FaMapMarkerAlt />
            </div> Origin: {food_origin}
          </li>
          <li className="list-group-item mt-3 flex items-center justify-center gap-3">
          <div className="text-rose-400">
           < FaUser />
            </div> Made by: {name}
          </li>
          <li className="flex justify-center items-center">
          <Link to={`/purchase/${_id}`}>
       <button className="text-rose-400 py-2 px-3 rounded-lg my-3 hover:bg-rose-400 hover:text-white hover:border-none font-semibold border border-rose-400">Purchase Now</button>
       </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
