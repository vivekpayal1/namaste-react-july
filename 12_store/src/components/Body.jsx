import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import RestrauntCard from "./RestrauntCard";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import useOnline from "../hooks/useOnline";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [restrauntListData, setRestrauntListData] = useState([]);
  const [filteredRestraunt, setFilteredRestraunt] = useState([]);
  const { user, setUser } = useContext(UserContext);

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

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline</h1>;
  }

  return filteredRestraunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="search-container flex">
        <input
          type="text"
          placeholder="Search Your Food"
          value={searchText}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Search Food
        </button>
        <input
          type="text"
          className=" border border-gray-300 text-gray-900"
          placeholder="enter you context"
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="restraunt-list grid grid-cols-5 gap-3 mt-4">
        {filteredRestraunt.map((ele) => (
          <RestrauntCard {...ele.info} key={ele.info.id} />
        ))}
      </div>
    </div>
  );
}

export default Body;
