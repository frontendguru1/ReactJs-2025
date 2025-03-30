import { useParams } from "react-router";
import { Loader, PageContainer, ProductCard } from "../components";
import useFetch from "../hooks/useFetch";
// import { useEffect } from "react";

const ProductList = () => {
  const { id } = useParams();
  const {
    data: products,
    loader,
    error,
  } = useFetch(`https://api.escuelajs.co/api/v1/categories/${id}/products`);

  /*useEffect(() => {
    console.log("products", products);
  }, [products]);*/

  if (loader) {
    return (
      <PageContainer style="py-32">
        <Loader />
      </PageContainer>
    );
  }

  return (
    <PageContainer style="py-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center text-uppercase">
        Product List{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </PageContainer>
  );
};

export default ProductList;
