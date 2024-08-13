import React from "react";
import Heading from "../shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";
const BlogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ex sed tempora repellendus harum, sint nesciunt modi ea incidunt facere non quisquam quibusdam explicabo qui!",
    published: "Jan 20, 2024 by Dilshad",
    image: Img1,
    delay: 0,
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ex sed tempora repellendus harum, sint nesciunt modi ea incidunt facere non quisquam quibusdam explicabo qui!",
    published: "Jan 20, 2024 by Satya",
    image: Img2,
    delay: 200,
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ex sed tempora repellendus harum, sint nesciunt modi ea incidunt facere non quisquam quibusdam explicabo qui!",
    published: "Jan 20, 2024 by Sabir",
    image: Img3,
    delay: 400,
  },
];
const Blogs = () => {
  return (
    <div className="my-12" id="about">
      <div className="container" id="blog">
        {/* header section */}
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs"} />
        {/* Blog Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((item, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.delay}
              key={idx}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2 ">
                <img
                  src={item.image}
                  alt="pic"
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{item.published}</p>
                <p className="font-bold line-clamp-1">{item.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
