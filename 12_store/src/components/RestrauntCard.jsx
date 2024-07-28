import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function RestrauntCard({ name, cloudinaryImageId, cuisines, avgRating, id }) {
  const { user } = useContext(UserContext);
  return (
    <div className="card shadow-md overflow-hidden rounded-sm">
      <Link to={`/restraunt/${id}`}>
        <div className="h-[250px]">
          <img
            className="h-full w-full"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt=""
          />
        </div>
        <h2>{name}</h2>
        <p>{cuisines}</p>
        <span>{avgRating}</span> <br />
        <span>{user.name}</span> <br />
        <span>{user.email}</span>
      </Link>
    </div>
  );
}
export default RestrauntCard;
