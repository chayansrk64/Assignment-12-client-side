import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
import bannerImg1 from '../../../assets/home/8734985.jpg'
import bannerImg4 from '../../../assets/home/banner (4).jpg'
import bannerImg3 from '../../../assets/home/banner (3).jpg'
import bannerImg2 from '../../../assets/home/banner (2).jpg'
 
import './Banner.css';

const Banner = () => {
    return (
        <div>
             <Carousel autoPlay={true} interval={3000} infiniteLoop={true} >
                <div>
                    <img src={bannerImg1} />
                  
                </div>
                <div>
                    <img src={bannerImg2}/>
                    
                </div>
                <div>
                    <img src={bannerImg3} />
                    
                </div>
                <div>
                    <img src={bannerImg4} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;