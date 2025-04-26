import {
  Loader,
  PageContainer,
  ProductCard,
  Filters,
  ProductList as RenderProducts,
} from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, getAllProduct } from "../features/productSlice";
// import { useEffect } from "react";

const ProductList = () => {
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <PageContainer style="py-32">
        <Loader />
      </PageContainer>
    );
  }

  const filters = (filterData) => {
    // console.log("filterData from parent", filterData);
    dispatch(getAllProduct(filterData));
  };

  return (
    <PageContainer style="py-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center text-uppercase">
        Product List{" "}
      </h1>

      <Filters filtersData={filters} />
      <RenderProducts products={product} />
    </PageContainer>
  );
};

export default ProductList;
