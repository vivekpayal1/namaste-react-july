import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import useRestraunt from "../hooks/useRestraunt";
import { useDispatch } from "react-redux";
import { addItems } from "../store/slices/cartSlice";

const RestrauntDetails = () => {
  const params = useParams();
  const { id } = params;
  const { getMenus, recommendedItems } = useRestraunt(id);
  const dispatch = useDispatch();
  function addFoodItem(item) {
    return () => {
      dispatch(addItems(item));
    };
  }
  return (
    <div>
      <h1>{getMenus.name} </h1>
      <img src={IMG_CDN_URL + getMenus.cloudinaryImageId} alt="" />
      <p>{getMenus.areaName}</p>
      <p>{getMenus.city}</p>
      {recommendedItems?.map((recommendedItem, index) => {
        const { name } = recommendedItem.card.info;
        return (
          <li key={index}>
            {name}{" "}
            <button
              onClick={addFoodItem(recommendedItem)}
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Add
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default RestrauntDetails;
