import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const RestrauntDetails = () => {
  const [getMenus, setMenus] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getMenuData();
  }, []);

  async function getMenuData() {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.1157619&lng=78.28530169999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    setRecommendedItems(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    setMenus(data.data.cards[2].card.card.info);
  }
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
