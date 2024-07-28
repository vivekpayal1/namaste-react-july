import { useState } from "react";

const Profile = ({ name }) => {
  const [count] = useState(0);
  return (
    <div>
      <h1>Profile from functional Components {name}</h1>
    </div>
  );
};

export default Profile;
