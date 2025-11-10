import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../components/Login/Login";
import RegisterPage from "../components/Register/RegisterPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRouters from "./PrivateRouters";
import Profile from "../components/Profile/Profile";
import AppDetails from "../components/AppDetails/AppDetails";
import Review from "../components/Review/Review";
import TrendingApps from "../components/TrendingApps/TrendingApps";
import About from "../components/About/About";
import NotAvailable from "../components/NotAvailable/NotAvailable";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/AppData.json"),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: RegisterPage,
      },
      {
        path: "/trending",
        Component: TrendingApps,
        loader: () => fetch("/AppData.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/notavailable",
        Component: NotAvailable,
      },
      {
        path: "/appDetails/:id",
        element: (
          <PrivateRouters>
            <AppDetails></AppDetails>
          </PrivateRouters>
        ),
        loader: () => fetch("/AppData.json"),
      },
      {
        path: "/appDetails/:id/review",
        element: (
          <PrivateRouters>
            <Review></Review>
          </PrivateRouters>
        ),
        loader: () => fetch("/AppData.json"),
      },
      {
        path: "profile",
        element: (
          <PrivateRouters>
            <Profile></Profile>
          </PrivateRouters>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
