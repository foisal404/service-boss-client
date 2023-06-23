import { Outlet } from "react-router-dom";
import NavHead from "../component/NavHead/NavHead";
import Footer from "../component/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavHead/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;