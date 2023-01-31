import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

import { getProduct, getSizes } from "../../services/api";
import Slider from "react-slick";

import { colors } from "../../assets/colors";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
  const [productData, setProductData] = useState({});
  const [sizes, setSizes] = useState([]);
  const [activeSize, setActiveSize] = useState("");

  const { categotyId, productId } = useParams();

  const fetchProductData = async () => {
    const productData = await getProduct(categotyId);
    const productSizes = await getSizes();
    setProductData(productData);
    setSizes(productSizes);
  };

  const getIndexOfActiveColor = () => {
    const index = productData?.colors?.findIndex(
      (color) => color.id.toString() === productId
    );
    return index;
  };

  const checkIfSizeIsAvailable = (sizeId) => {
    const size = productData.colors[getIndexOfActiveColor()].sizes.find(
      (size) => size === sizeId
    );
    if (size) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    setActiveSize("");
  }, [productId]);

  const getBaseImgUrl = () => {
    if (productData.id) {
      const urls =
        productData.id && productData.colors[getIndexOfActiveColor()]?.images;
      const url = urls[0].substring(0, urls[0].length - 5);
      return url;
    }
    return null;
  };

  const getBackgroundColor = (colorName) => {
    const colorHex = colors.find((color) => color.name === colorName).color;
    return colorHex;
  };

  const handleChangeSize = (e) => {
    setActiveSize(e.target.name);
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a href="#" className={styles.imgminWrapper}>
          <img
            src={`${getBaseImgUrl()}${i + 1}.png`}
            alt={getBaseImgUrl()}
            className={styles.imgmin}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1>{productData.name}</h1>
      </div>
      <div className={styles.imgAndDataWrapper}>
        <div className={styles.leftSideWrapper}>
          <Slider {...settings} id="imageSlider">
            {productData.id &&
              productData.colors[getIndexOfActiveColor()].images.map((elem) => (
                <div key={elem} className={styles.imgWrapper}>
                  <img src={elem} alt={elem} className={styles.imageMain} />
                </div>
              ))}
          </Slider>
        </div>
        <div className={styles.rightSideWrapper}>
          <div style={{ alignSelf: "start" }}>
            <h2>Цена товара:</h2>
            <p>
              $
              {productData.id &&
                productData.colors[getIndexOfActiveColor()].price}
            </p>
            <h2>Описание товара:</h2>
            <p>
              {productData.id &&
                productData.colors[getIndexOfActiveColor()].description}
            </p>
          </div>
          <div>
            <h2>Выбрать размер:</h2>
            <div className={styles.sizesLabelsWrapper}>
              {sizes?.map((size) => {
                const isAvailable = checkIfSizeIsAvailable(size.id);
                return (
                  <button
                    onClick={handleChangeSize}
                    name={size.label}
                    key={size.id}
                    className={
                      size.label === activeSize
                        ? `${styles.activeSize} ${styles.sizeItem}`
                        : `${styles.sizeItem}`
                    }
                    disabled={!isAvailable}
                  >
                    {size.label} - {size.number.toString()}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h2>Доступные цвета:</h2>
            <div className={styles.colorsWrapper}>
              {productData.id &&
                productData.colors.map((color, index) => (
                  <Link
                    to={`/products/${categotyId}/${color.id}`}
                    key={color.name}
                  >
                    <div
                      className={
                        productData.colors[getIndexOfActiveColor()].name ===
                        color.name
                          ? `${styles.activeColor} ${styles.colorItem}`
                          : `${styles.colorItem}`
                      }
                      style={{
                        backgroundColor: getBackgroundColor(color.name),
                      }}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
