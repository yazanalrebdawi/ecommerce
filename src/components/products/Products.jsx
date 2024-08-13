import React from "react";
import Heading from "../shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img9 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";
const Products = () => {
  const ProductsData = [
    { id: 1, img: Img1, title: "Boat Headphone", price: 120, aosDelay: "0" },
    {
      id: 2,
      img: Img2,
      title: "Rocky Mountain",
      price: 420,
      aosDelay: "200",
    },
    {
      id: 3,
      img: Img3,
      title: "Boat Headphone",
      price: 320,
      aosDelay: "400",
    },
    {
      id: 4,
      img: Img4,
      title: "Printed",
      price: 220,
      aosDelay: "400",
    },
    {
      id: 5,
      img: Img5,
      title: "Boat Headphone",
      price: 320,
      aosDelay: "600",
    },
    {
      id: 6,
      img: Img7,
      title: "Rocky Mountain",
      price: 420,
      aosDelay: "800",
    },
    {
      id: 7,
      img: Img9,
      title: "Goggles",
      price: 320,
      aosDelay: "1000",
    },
    {
      id: 8,
      img: Img5,
      title: "Boat Headphone",
      price: 320,
      aosDelay: "1200",
    },
  ];
  return (
    <div>
      <div className="container">
        {/* header section */}
        <Heading title={"Our Products"} subtitle={"Explore Our Products"} />
        {/* body section */}
        <ProductCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
