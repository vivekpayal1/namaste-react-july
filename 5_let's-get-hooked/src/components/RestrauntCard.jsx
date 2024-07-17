import { IMG_CDN_URL } from "../utils/constant";

function RestrauntCard({ name, cloudinaryImageId, cuisines, avgRating }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <h2>{name}</h2>
      <p>{cuisines}</p>
      <span>{avgRating}</span>
    </div>
  );
}
export default RestrauntCard;
