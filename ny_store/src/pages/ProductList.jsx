import { Loader, PageContainer, ProductCard, Filters } from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../features/productSlice";
// import { useEffect } from "react";

const ProductList = () => {
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector((state) => state.product);

  // useDispatch ==> to trigger an action from the component
  // const clickHandler = () => {
  //   dispatch(clearError());
  // };

  // useSelector ==> to get the state of the slice

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  if (loading) {
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

      {/* <Filters search={getFilters} /> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg">
        {product &&
          product.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </PageContainer>
  );
};

export default ProductList;
