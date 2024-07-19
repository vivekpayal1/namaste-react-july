import { useState, useEffect } from "react";

const useRestraunt = (id) => {
  const [getMenus, setMenus] = useState([]);
  const [recommendedItems, setRecommendedItems] = useState([]);
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
  return { getMenus, recommendedItems };
};

export default useRestraunt;
