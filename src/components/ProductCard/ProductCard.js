import React from "react";

import styles from "./ProductCard.module.scss";

const ProductCard = ({data}) => {
  const { name, price, description, images } = data;

  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCard}>
        <div className={styles.productCardImage}>
          <img src={images[0]} alt={name} />
        </div>
        <div className={styles.productCardInfo}>
          <p>{description}</p>
          <p>Цвет: {name}</p>
          <p>Цена: ${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;