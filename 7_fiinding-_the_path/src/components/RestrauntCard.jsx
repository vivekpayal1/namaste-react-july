import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

function RestrauntCard({ name, cloudinaryImageId, cuisines, avgRating, id }) {
  console.log(id);
  return (
    <div className="card">
      <Link to={`/restraunt/${id}`}>
        <div className="card-img">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
        </div>
        <h2>{name}</h2>
        <p>{cuisines}</p>
        <span>{avgRating}</span>
      </Link>
    </div>
  );
}
export default RestrauntCard;
