import ChooseUsBanner from "../ChooseUsBanner/ChooseUsBanner";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import TopBanner from "../TopBanner/TopBanner";


const Home = () => {
    return (
        <div>
            <TopBanner/>
            <DetailsBanner/>
            <ChooseUsBanner/>
        </div>
    );
};

export default Home;