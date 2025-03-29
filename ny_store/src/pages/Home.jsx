import { useEffect } from "react";
import {
  Banner,
  CategoryCard,
  FullWidthContainer,
  NewArrivals,
  PageContainer,
} from "../components";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const {
    data: categories,
    loader,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/categories/");
  const categoriesData = categories.slice(0, 4);

  return (
    <FullWidthContainer>
      <Banner />

      {/* Categories you might like */}
      <PageContainer style={"py-10"}>
        <h2 class="text-3xl font-semibold text-gray-800 mb-6 text-center text-uppercase">
          Categories You Might Like
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {loader && <p className="text-center">Loading...</p>}

          {error && <p className="text-center">{error}</p>}

          {categoriesData &&
            categoriesData.map((category) => {
              return <CategoryCard data={category} />;
            })}
        </div>

        <NewArrivals />
      </PageContainer>
    </FullWidthContainer>
  );
};

export default Home;
