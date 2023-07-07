import ChooseUsBanner from "../ChooseUsBanner/ChooseUsBanner";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import OurServices from "../OurServices/OurServices";
import SearchService from "../SearchService/SearchService";
import TopBanner from "../TopBanner/TopBanner";


const Home = () => {
    return (
        <div>
            <TopBanner/>
            <SearchService/>
            <OurServices/>
            <DetailsBanner/>
            <ChooseUsBanner/>
        </div>
    );
};

export default Home;