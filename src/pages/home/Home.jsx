import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/category/Category";
import Category2 from "../../components/category/Category2";
import Banner from "../../components/banner/Banner";
import Services from "../../components/services/Services";
import Partner from "../../components/partner/Partner";
import Blogs from "../../components/blog/Blog";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import Propup from "../../components/popup/Popup";
import { useState, useEffect } from "react";
// pictures
import headphones from "../../assets/hero/headphone.png";
import smartWatch2 from "../../assets/category/smartwatch2-removebg-preview.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  const BannerData = {
    discount: "30% OFF",
    title: `Fine Smile `,
    date: "10 Jan to 28 Jan",
    image: headphones,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#f42c37",
  };
  const BannerData2 = {
    discount: "30% OFF",
    title: `Happy Hours `,
    date: "10 Jan to 28 Jan",
    image: smartWatch2,
    title2: "Smart Solo ",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#2dcc6f",
  };
  const [orderPopup, setOrderPopup] = useState(false);
  const popupHandler = () => {
    return setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar popupHandler={popupHandler} />
      <Hero popupHandler={popupHandler} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partner />
      <Footer />
      <Propup orderPopup={orderPopup} popupHandler={popupHandler} />
    </div>
  );
};

export default Home;
