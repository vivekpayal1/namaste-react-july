import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [restrauntListData, setRestrauntListData] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  useEffect(() => {
    getRestraunt();
  }, []);

  async function getRestraunt() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFilteredRestraunt(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setRestrauntListData(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (err) {
      console.log(err);
    }
  }

  function handleSearch() {
    const filteredList = restrauntListData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestraunt(filteredList);
  }

  return filteredRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Your Food"
          value={searchText}
          className="search-input"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search Food</button>
      </div>
      <div className="restraunt-list">
        {filteredRestraunt.map((ele) => (
          <RestrauntCard {...ele.info} key={ele.info.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
