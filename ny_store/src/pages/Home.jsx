import { useEffect } from "react";
import {
  Banner,
  CategoryCard,
  FullWidthContainer,
  Loader,
  NewArrivals,
  PageContainer,
} from "../components";
// import useFetch from "../hooks/useFetch";
import { getAllCategories } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector((store) => store.product);

  const categoriesData = categories.slice(0, 4);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <FullWidthContainer>
      <Banner />

      {/* Categories you might like */}
      <PageContainer style={"py-10"}>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center text-uppercase">
          Categories You Might Like
        </h2>
        <div className="flex gap-6 pt-6 min-h-32">
          {loading && <Loader />}

          {error && <p className="text-center">{error}</p>}

          {categoriesData &&
            categoriesData.map((category) => {
              console.log("category", category);
              return <CategoryCard key={category.id} data={category} />;
            })}
        </div>

        <NewArrivals />
      </PageContainer>
    </FullWidthContainer>
  );
};

export default Home;
