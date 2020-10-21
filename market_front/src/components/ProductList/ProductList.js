import React from "react";
import ProductListItem from "./ProductListItem/ProductListItem";

const ProductList = props => {
  return (
    <div className="Products">
      {
        props.products.map(product => {
          return (
            <ProductListItem
              key={product._id}
              id={product._id}
              price={product.price}
              title={product.title}
              image={product.image}
              category={product.category}
            />
          );
        })
      }
    </div>
  );
};

export default ProductList;