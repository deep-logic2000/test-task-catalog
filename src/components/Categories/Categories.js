import React from "react";

import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./Categories.module.scss";

const Categories = ({ data }) => {
  const { name, id, colors } = data;

  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryTitleWrapper}>
        <h2>{name}</h2>
      </div>
      <div>
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          {colors.map((color) => (
            <Link
              to={`/products/${id}/${color.id}`}
              key={color.id}
              className={styles.linkWrapper}
            >
              <ProductCard data={color} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
