import Slider from "react-slick";
import React from "react";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";
const Hero = ({ popupHandler }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "Ease-in-out",
    pauseOnHover: "false",
    pauseonFocus: true,
  };
  const HeroData = [
    {
      id: 1,
      img: Image1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Headphone",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt voluptatibus aliquid voluptatem, odio eligendi perspiciatis soluta, veritatis consequatur et beatae. Excepturi eligendi possimus, ut corrupti praesentium quo quae ipsa!",
    },
    {
      id: 2,
      img: Image2,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Virtual",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt voluptatibus aliquid voluptatem, odio eligendi perspiciatis soluta, veritatis consequatur et beatae. Excepturi eligendi possimus, ut corrupti praesentium quo quae ipsa!",
    },
    {
      id: 1,
      img: Image3,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Laptops",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus deserunt voluptatibus aliquid voluptatem, odio eligendi perspiciatis soluta, veritatis consequatur et beatae. Excepturi eligendi possimus, ut corrupti praesentium quo quae ipsa!",
    },
  ];
  return (
    <div className="container " id="home">
      <div className="overflow-hidden rounded-3xl min-h-[550px]  sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0 ">
          <Slider {...settings} autoplay={true} autoplaySpeed={2500}>
            {HeroData.map((data, idx) => (
              <div key={idx}>
                {" "}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content */}
                  <div className="flex flex-col relative z-10 justify-center gap-4 sm:pl-3 pt-12  sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                    {" "}
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl italic uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    ></div>
                  </div>
                  {/* Img content */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt="pic"
                        className="w-[300px] z-40 relative sm:h-[450px] h-[300px] sm:h-[450px ] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto  drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
