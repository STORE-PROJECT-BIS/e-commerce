/*eslint-disable */

import styles from "./Slider.module.css";
import { Link } from "react-router-dom";

function Slider({ name, price1, price2, image, rating, offer, review }) {

  const OFFER = {
    width: "55px",
    height: "26px",
    textAlign: "center",
    background: "red",
    color: "white",
    position: "absolute",
    top: "10px",
    left: "10px",
    borderRadius: "4px",
  };

  const DISPLAY = {
    display: "none",
  };

  const NEW = {
    height: "26px",
    textAlign: "center",
    background: "#00FF66",
    color: "white",
    position: "absolute",
    top: "10px",
    left: "10px",
    borderRadius: "4px",
    padding: "4px 12px",
  };

  const appliedStyle = offer === "NEW" ? NEW : offer === "" ? DISPLAY : OFFER;

  return (
    <Link to={`/${name}`}>
    <div className={styles.slide}>
      <div className={styles.image}>
        <img src={image} alt={name} />
        <div className={styles.eye}>
          
          
        </div>
        <span style={appliedStyle}>{offer}</span>
      </div>
      <div className={styles.captions}>
        <h5>{name}</h5>
        <div className={styles.price}>
          <span className={styles.price}>{price1}</span>
          <span>{price2}</span>
        </div>
        <div className={styles.rating}>
          <div className={styles.stars}>
            <img src={rating.image1} alt="" />
            <img src={rating.image2} alt="" />
            <img src={rating.image3} alt="" />
            <img src={rating.image4} alt="" />
            <img src={rating.image5} alt="" />
            <span>({review})</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default Slider;
