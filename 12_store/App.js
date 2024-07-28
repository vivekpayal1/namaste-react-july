import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { lazy, Suspense, useState } from "react";
import { Provider } from "react-redux";
import store from "./src/store/store.js";
import ReactDOM from "react-dom/client";
import UserContext from "./src/context/UserContext.jsx";

import "./index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestrauntDetails from "./src/components/RestrauntDetails";
import Profile from "./src/components/Profile";
import ProfileClass from "./src/components/ProfileClass";
import Cart from "./src/components/Cart.jsx";
const InstaMart = lazy(() => import("./src/components/InstaMart.jsx"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "vivek",
    email: "vivek@gmail.com",
  });
  console.log(user);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntDetails />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profileclass",
            element: <ProfileClass />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
