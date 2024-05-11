
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Swipper = () => {
    return (
        <div className='container roun py-10 mx-auto'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          <SwiperSlide>
            <Slide
              image="https://i.ibb.co/CK5R74z/pexels-ash-122861-376464.jpg"
              title="Taste of Home"
              text='Experience the warmth and comfort of home-cooked meals in every bite.oin us for a culinary journey that feels just like home'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image=" https://i.ibb.co/yBDQ6MP/pexels-chanwalrus-958545.jpg"
              title="Flavor Fusion"
              text='Indulge in a symphony of flavors that dance on your palate.Our dishes blend the best of tradition and innovation for a taste sensation'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image="https://i.ibb.co/fvZq6CR/pexels-ella-olsson-572949-1640777.jpg"
              title="Satisfy Your Cravings"
              text='Craving something delicious? Look no further! Our menu is packed with mouthwatering options'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image="https://i.ibb.co/HNTtY9s/pexels-robinstickel-70497.jpg"
              title="Simply Delicious"
              text='SSimple, yet oh-so-delicious! Our dishes are crafted with care using the
              freshest ingredients to bring out the best in every bite'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image="https://i.ibb.co/9h427CP/pexels-fotios-photos-1279330.jpg"
              title="Foodie's Paradise"
              text='Welcome to a paradise for food lovers! Dive into a world of culinary delights where every dish is a celebration of flavor and passion'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Swipper;