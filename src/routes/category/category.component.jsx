import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/product-card/product-card.component";
import { Spinner } from "../../components/spinner/spinner.component";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import "./category.component.scss";

export const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category}</h2>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};
