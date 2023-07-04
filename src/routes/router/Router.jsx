import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../page/Home/Home/Home";
import AllServices from "../../page/AllServices/Allservices/AllServices";
import DetailsService from "../../page/AllServices/DetailsService/DetailsService";
import Login from "../../page/Login/Login";
import Register from "../../page/Login/Register";
import useService from "../../hooks/useService";
import Dashboard from "../../page/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute";
import AllUser from "../../page/DashBoardPage/Alluser/AllUser";
import ManageService from "../../page/DashBoardPage/ManageService/ManageService";
import AddService from "../../page/DashBoardPage/AddService/AddService";
import UpdateService from "../../page/DashBoardPage/UpdateService/UpdateService";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/allservies",
          element:<AllServices/>
        },
        {
          path:"/allservies/:id",
          element:<DetailsService/>,
          loader: ({params})=> useService(`${params.id}`)
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        {
          path:'dashboard/allUser',
          element:<AllUser/>
        },
        {
          path:'dashboard/manageservies',
          element:<ManageService/>
        },
        {
          path:'dashboard/addservie',
          element:<AddService/>
        },
        {
          path:'/dashboard/dashboard/manageservies/dashboard/:id',
          element:<UpdateService/>,
          loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`)

        }
      ]
      
    }
]);

export default router;