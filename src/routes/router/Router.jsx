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
import UserCart from "../../page/DashBoardPage/userCart/UserCart";
import Payment from "../../page/DashBoardPage/Payment/Payment";
import Mypayment from "../../page/DashBoardPage/MyPayment/Mypayment";
import Profile from "../../page/DashBoardPage/Profile/Profile";
import Transiction from "../../page/DashBoardPage/Transiction/Transiction";

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
          path:'',
          element:<Profile/>
        },
        {
          path:'allUser',
          element:<AllUser/>
        },
        {
          path:'transictions',
          element:<Transiction/>
        },
        {
          path:'usercart',
          element:<UserCart/>
        },
        {
          path:'mypayment',
          element:<Mypayment/>
        },
        {
          path:'manageservies',
          element:<ManageService/>
        },
        {
          path:'addservie',
          element:<AddService/>
        },
        {
          path:'usercart/payment/:id',
          element:<Payment/>,
          loader:({params}) => fetch(`https://service-boss-server.vercel.app/cart?id=${params?.id}`)
        },
        {
          path:'manageservies/:id',
          element:<UpdateService/>,
          loader:({params})=> fetch(`https://service-boss-server.vercel.app/service/${params.id}`)

        }
      ]
      
    }
]);

export default router;