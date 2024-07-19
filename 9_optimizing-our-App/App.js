import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
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
// import InstaMart from "./src/components/InstaMart";
const InstaMart = lazy(() => import("./src/components/InstaMart.jsx"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
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
