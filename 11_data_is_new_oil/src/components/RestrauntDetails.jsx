import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import useRestraunt from "../hooks/useRestraunt";

const RestrauntDetails = () => {
  const params = useParams();
  const { id } = params;
  const { getMenus, recommendedItems } = useRestraunt(id);

  return (
    <div>
      <h1>{getMenus.name} </h1>
      <img src={IMG_CDN_URL + getMenus.cloudinaryImageId} alt="" />
      <p>{getMenus.areaName}</p>
      <p>{getMenus.city}</p>
      {recommendedItems?.map((recommendedItem, index) => {
        const { name } = recommendedItem.card.info;
        return <li key={index}>{name}</li>;
      })}
    </div>
  );
};

export default RestrauntDetails;
