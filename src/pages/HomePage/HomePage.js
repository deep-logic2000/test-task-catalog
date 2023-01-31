import React, { useState, useEffect } from "react";

import Categories from "../../components/Categories/Categories";

import { getProducts } from "../../services/api";

import styles from "./HomePage.module.scss";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1>Our products</h1>
        </div>
        <div className={styles.productsWrapper}>
          {products.map((product) => (
            <div key={product.id}>
              <div className={styles.categoryWrapper}>
                <Categories data={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
