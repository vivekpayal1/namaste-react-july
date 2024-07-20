import { useState } from "react";

const InstaMart = () => {
  const [isVisible, setisVisible] = useState("team");

  return (
    <div>
      <Section
        title={"AboutInsta Mart"}
        description={"This is Instamart About page"}
        isVisible={isVisible === "about"}
        setisVisible={() => setisVisible("about")}
      />
      <Section
        title={"Team Mart"}
        description={"This is Instamart Team page"}
        isVisible={isVisible === "team"}
        setisVisible={() => setisVisible("team")}
      />
    </div>
  );
};
const Section = ({ title, description, isVisible, setisVisible }) => {
  console.log(setisVisible)
  return (
    <div className="mx-5 border-b border border-black  px-4  py-2">
      <button>Hide</button>
      <button onClick={()=> setisVisible(true)}>Show</button>
      <h1 className="   text-3xl font-bold flex justify-between w-full">
        {title}
      </h1>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default InstaMart;
