import { Link } from "react-router";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg">
      {products &&
        products.map((product) => {
          return (
            <Link to={`/product-details/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProductList;
