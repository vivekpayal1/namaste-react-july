import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Person",
    email: "dummy@gmail.com",
  },
  setUser: () => {},
});

export default UserContext;
