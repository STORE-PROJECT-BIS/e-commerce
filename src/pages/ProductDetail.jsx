/*eslint-disable */

import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from "./ProductDetail.module.css"
import NotFound from './NotFound';

import star  from "../images/icon/star.png"
import noStar  from "../images/icon/noStar.png"
import halfStar  from "../images/icon/star-half-filled.png"

import BreedDryDogFood  from "../images/products/10.png"
import CANONEOSDSLRCamera  from "../images/products/11.png"
import ASUSFHDGamingLaptop  from "../images/products/12.png"
import CurologyProductSet  from "../images/products/13.png"
import KidsElectricCar  from "../images/products/14.png"
import JrZoomSoccerCleats  from "../images/products/15.png"
import GP11ShooterUSBGamepad  from "../images/products/16.png"
import QuiltedSatinJacket  from "../images/products/17.png"

import Return  from "../images/Icon-return.png"
import delivery  from "../images/delivery.png"


const ALL_PRODUCT = [
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
    offer: "",
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
    offer: "",
    review: "325",
  },
  {
    name: "Curology Product Set ",
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
    offer: "",
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
    offer: "",
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
    offer: "",
    review: "53",
  }]

  const sizes = ['S', 'M', 'L', 'XL']

function ProductDetail() {
  const { name } = useParams();

  const product = ALL_PRODUCT.find(p => p.name === name);

  if (!product) {
    return <NotFound/>;
  }

  // Save user selections
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [totalPrice, setTotalPrice] = useState(parseFloat(product.price1.replace('$', '')));

  // Handle color change
  const handleRadioChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Handle quantity increase/decrease
  function handleClickPlus() {
    setQuantity(prevQuantity => prevQuantity + 1);
    updateTotalPrice(quantity + 1);
  }

  function handleClickMinus() {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    updateTotalPrice(Math.max(quantity - 1, 1));
  }

  // Update total price based on quantity
  const updateTotalPrice = (newQuantity) => {
    const pricePerUnit = parseFloat(product.price1.replace('$', ''));
    setTotalPrice(newQuantity * pricePerUnit);
  };

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Prepare data to send to Checkout
  const checkoutData = {
    productName: product.name,
    color: selectedColor,
    size: selectedSize,
    quantity: quantity,
    totalPrice: `$${totalPrice.toFixed(2)}`
  };
  

  return (
    <div className={styles.Container}>
    <div className={styles.container}>
      <div>
        <span className={styles.path}>Account / Products / </span>{product.name}
        <div className={styles.gallery}>
          <div className={styles.images}>
            <div><img src={product.image} /></div>
            <div><img src={product.image} /></div>
            <div><img src={product.image} /></div>
            <div><img src={product.image} /></div>
          </div>
          <div className={styles.main}><img src={product.image} /></div>
        </div>
      </div>
      <div className={styles.detail}>
        <h5>{product.name}</h5>
        <div>
          <div>
            <img src={product.rating.image1} alt="" />
            <img src={product.rating.image2} alt="" />
            <img src={product.rating.image3} alt="" />
            <img src={product.rating.image4} alt="" />
            <img src={product.rating.image5} alt="" />
          </div>
          <span>({product.review} Reviews) | </span>
          <span> In Stock</span>
        </div>
        <span className={styles.price}>${totalPrice.toFixed(2)}</span>
        <p>
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
        </p>
        <hr />
        <div>
            <div className={styles.colorSelector}>
              <span>Colours:</span>
              <label className={`${styles.colorOption} ${selectedColor === 'red' ? styles.selected : ''}`}>
                <input
                  type="radio"
                  value="red"
                  checked={selectedColor === 'red'}
                  onChange={handleRadioChange}
                />
              </label>
              <label className={`${styles.colorOption} ${selectedColor === 'green' ? styles.selected : ''}`}>
                <input
                  type="radio"
                  value="green"
                  checked={selectedColor === 'green'}
                  onChange={handleRadioChange}
                />
              </label>
            </div>
          </div>
            <div className={styles.size}>
              <p>Size: </p>
              {sizes.map((size) => (
                <button key={size} onClick={() => handleSizeSelect(size)} className={selectedSize === size && styles.selected }>
                {size}
                </button>
              ))}
            </div>
            <div className={styles.buy}>
              <div className={styles.num}>
                <span onClick={handleClickMinus}>-</span>
                <span>{quantity}</span>
                <span onClick={handleClickPlus}>+</span>
              </div>
                <Link to="/CheckOut" state={checkoutData} > <button className={styles.buyNow}>Buy Now</button> </Link>
            </div>
            <div  className={styles.services}>
              <div  className={styles.delivery}>
                <img src={delivery} alt="" />
                <div>
                  <h6>Free Delivery</h6>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <hr />
              <div className={styles.edit}>
                <div className={styles.delivery}>
                  <img src={Return} alt="" />
                  <div>
                    <h6>Return Delivery</h6>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default ProductDetail;


