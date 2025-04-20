import {
  Loader,
  PageContainer,
  ProductCard,
  Filters,
  ProductList as RenderProducts,
} from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsByCategory } from "../features/productSlice";
import { useParams } from "react-router";
// import { useEffect } from "react";

const ProductListByCategory = () => {
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllProductsByCategory(id));
  }, [dispatch, id]);

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
      <RenderProducts products={product} />
    </PageContainer>
  );
};

export default ProductListByCategory;
