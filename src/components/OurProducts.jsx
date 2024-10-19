/*eslint-disable */

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import "./style.css";
import styles from "./OurProducts.module.css";

import { Navigation } from "swiper/modules";

import Slider from "./Slider";

import star  from "../images/icon/star.png"
import noStar  from "../images/icon/noStar.png"
import halfStar  from "../images/icon/star-half-filled.png"

import JrZoomSoccerCleats  from '../images/products/15.png'
import KidsElectricCar  from "../images/products/14.png"
import BreedDryDogFood  from "../images/products/10.png"
import CANONEOSDSLRCamera  from "../images/products/11.png"
import ASUSFHDGamingLaptop  from "../images/products/12.png"
import CurologyProductSet  from "../images/products/13.png"
import GP11ShooterUSBGamepad  from "../images/products/16.png"
import QuiltedSatinJacket  from "../images/products/17.png"

function OurProducts() {

  const SLIDER_PRODUCT1 = [
    {
      name: "Breed Dry Dog Food",
      price1: "$100",
      price2: "",
      image: BreedDryDogFood,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: noStar,
        image5: noStar,
      },
      offer: "",
      review: "35",
    },
    {
      name: "CANON EOS DSLR Camera",
      price1: "$360",
      price2: "",
      image: CANONEOSDSLRCamera,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: noStar,
      },
      offer: "NEW",
      review: "95",
    },
    {
      name: "ASUS FHD Gaming Laptop",
      price1: "$700",
      price2: "",
      image: ASUSFHDGamingLaptop,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "NEW",
      review: "325",
    },
    {
      name: "Curology Product Set",
      price1: "$500",
      price2: "",
      image: CurologyProductSet,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: noStar,
      },
      offer: "",
      review: "145",
    },
  ];

  const SLIDER_PRODUCT2 = [
    {
      name: "Kids Electric Car",
      price1: "$960",
      price2: "",
      image: KidsElectricCar,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "NEW",
      review: "65",
    },
    {
      name: "Jr. Zoom Soccer Cleats",
      price1: "$1160",
      price2: "",
      image: JrZoomSoccerCleats,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: star,
      },
      offer: "NEW",
      review: "45",
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price1: "$660",
      price2: "",
      image: GP11ShooterUSBGamepad,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: halfStar,
      },
      offer: "",
      review: "96",
    },
    {
      name: "Quilted Satin Jacket",
      price1: "$660",
      price2: "",
      image: QuiltedSatinJacket,
      rating: {
        image1: star,
        image2: star,
        image3: star,
        image4: star,
        image5: halfStar,
      },
      offer: "NEW",
      review: "53",
    },
  ];

  return (
    <div className="container">
      <div className={styles.sliders}>
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="mySwiper"
        >
          {SLIDER_PRODUCT1.map((product) => (
            <SwiperSlide key={product.name}>
              <Slider
                name={product.name}
                price1={product.price1}
                price2={product.price2}
                image={product.image}
                rating={product.rating}
                offer={product.offer}
                review={product.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          navigation={true}
          slidesPerView={4}
          spaceBetween={0}
          modules={[Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          className="mySwiper"
        >
          {SLIDER_PRODUCT2.map((product) => (
            <SwiperSlide key={product.name}>
              <Slider
                name={product.name}
                price1={product.price1}
                price2={product.price2}
                image={product.image}
                rating={product.rating}
                offer={product.offer}
                review={product.review}
                display="none"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to='AllProducts'><button className={styles.button}>View All Products</button></Link>
      </div>
    </div>
  );
}

export default OurProducts;
