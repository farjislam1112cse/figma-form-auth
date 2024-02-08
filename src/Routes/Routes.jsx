import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/login";
import Logout from "../Pages/Home/Logout";

const myCreatedRoutes = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
       
       {
        path: "/",
        element:<Home></Home>
       }
        ,
       {
        path: "/login",
        element:<Login></Login>
       }
       ,
       {
        path: "/logout",
        element:<Logout></Logout>
       }
      ]
    },
  ]);
  
export default myCreatedRoutes;