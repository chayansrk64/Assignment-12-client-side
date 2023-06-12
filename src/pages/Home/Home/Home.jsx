 
import Banner from "../Banner/Banner";
import ParallaxCompo from "../ParallaxCompo/ParallaxCompo";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstractors from "../PopularInstractors/PopularInstractors";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <ParallaxCompo></ParallaxCompo>
            <PopularInstractors></PopularInstractors>
        </div>
    );
};

export default Home;

