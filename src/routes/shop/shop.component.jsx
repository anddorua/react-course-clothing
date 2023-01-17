import { useContext } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.component.scss";

export const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};
