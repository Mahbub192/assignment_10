import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Blog from "../layout/Blog";
import Chefs from "../layout/Chefs";
import LoginLayout from "../layout/LoginLayout";
import ChefInfo from "../pages/ChefInfo/ChefInfo";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://cooking-chef-server-mahbub192.vercel.app/chef"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path:'category',
    element:<Chefs></Chefs>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:":id",
        element:<PrivateRoute><ChefInfo></ChefInfo></PrivateRoute>,
        loader: ({params})=> fetch(`https://cooking-chef-server-mahbub192.vercel.app/chef/${params.id}`)
      }
    ]
  },
  {
    path:'blog',
    element:<Blog></Blog>,
    errorElement:<ErrorPage />,
  }
]);
export default router;
