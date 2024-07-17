import { useState } from "react";
import { restrauntList } from "../utils/constant";
import RestrauntCard from "./RestrauntCard";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [restrauntListData, setRestrauntListData] = useState(restrauntList);
  console.log(restrauntListData);
  function handleSearch() {
    const filteredList = restrauntListData.filter((restraunt) =>
      restraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRestrauntListData(filteredList);
  }
  return (
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
        {restrauntListData.map((ele) => {
          return <RestrauntCard {...ele.info} key={ele.info.id} />;
        })}
      </div>
    </div>
  );
}
export default Body;
