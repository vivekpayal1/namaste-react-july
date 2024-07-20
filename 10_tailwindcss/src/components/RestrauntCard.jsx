import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

function RestrauntCard({ name, cloudinaryImageId, cuisines, avgRating, id }) {
  return (
    <div className="card shadow-md overflow-hidden rounded-sm">
      <Link to={`/restraunt/${id}`}>
        <div className="h-[250px]">
          <img className="h-full w-full" src={IMG_CDN_URL + cloudinaryImageId} alt="" />
        </div>
        <h2>{name}</h2>
        <p>{cuisines}</p>
        <span>{avgRating}</span>
      </Link>
    </div>
  );
}
export default RestrauntCard;
