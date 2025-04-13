import { useParams } from "react-router";
import { Loader, PageContainer, ProductCard, Filters } from "../components";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
// import { useEffect } from "react";

const ProductList = () => {
  const { id } = useParams();
  const { data: products, loader } = useFetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );

  const [productList, setProductList] = useState(products || []);

  console.log("products", products);

  const getFilters = (searchFilters) => {
    console.log("searchValue", searchFilters);

    // const API = `https://api.escuelajs.co/api/v1/products/?title=${searchFilters.getFilters}&price_min=${searchFilters.priceMin}&price_max=${searchFilters.priceMax}&categoryId=${searchFilters.category}`

    const result = products.filter((product) =>
      product.title.includes(searchFilters)
    );

    setProductList(result);

    console.log("updated products", result);
  };

  useEffect(() => {
    setProductList(products);
  }, [products]);

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
      <Filters search={getFilters} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg">
        {productList &&
          productList.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </PageContainer>
  );
};

export default ProductList;

// {
//   search: "caps",
//   size: "small",
//   color: "red",
//   priceRange: "10-30",
//   sortBy: "newest",
// }
