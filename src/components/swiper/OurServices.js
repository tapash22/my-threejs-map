import { IconBase } from "react-icons";
import { Navigation, Pagination, Scrollbar, A11y,autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);

const OurServices = ({ carServices }) => {

  return (
    <Swiper slidesPerView={4}  autoplay={{ delay: 500,}}
      >
      {carServices.map((services) => (
        <SwiperSlide key={services.id}>
          <div className="bg-indigo-900 h-auto py-2 ring-1 ring-gray-300 px-4 cursor-pointer">
           <div className="h-auto w-full py-2 px-2 hover:py-5 hover:px-5 block">
           {services.icon}
           </div>
            <div className="px-2 py-4">
              <p className="text-lg font-medium tracking-normal text-white">{services.name}</p>
              <p className="uppercase text-xl font-normal tracking-wide text-white">{services.info}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OurServices;
