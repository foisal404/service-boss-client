import { Outlet } from "react-router-dom";
import NavHead from "../component/NavHead/NavHead";
import Footer from "../component/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavHead/>
            <section className='min-h-[80vh]'>
                <Outlet/>
            </section>
            <Footer/>
        </div>
    );
};

export default Main;