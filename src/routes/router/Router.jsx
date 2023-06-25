import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../page/Home/Home/Home";
import AllServices from "../../page/AllServices/Allservices/AllServices";
import DetailsService from "../../page/AllServices/DetailsService/DetailsService";

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
          element:<DetailsService/>
        }
      ]
    },
]);

export default router;