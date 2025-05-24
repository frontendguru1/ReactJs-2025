import { useNavigate, useParams } from "react-router";
import {
  Loader,
  PageContainer,
  ProductCountController,
  ProductList as RenderProducts,
} from "../components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "lucide-react";
import { MENU_PATH } from "../config/Menus";
import { addToCart } from "../features/cartSlice";
import { getProductById } from "../features/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(1);

  // const [similarProducts, setSimilarProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading, product, productDetailData } = useSelector(
    (state) => state.product
  );

  const similarProducts = product
    .filter((item) => item.category.name == productDetail?.category?.name)
    .slice(0, 4);

  const productDetailsData = () => {
    if (product.length > 0) {
      const details = product.find((item) => item.id == id);
      console.log("details", details);
      setProductDetail(details);
    } else {
      dispatch(getProductById(id));
    }
  };

  const handleNavigate = () => {
    navigate(MENU_PATH.SHOPPING_CART);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productDetail, quantity: quantity }));
  };

  const getCount = (count) => {
    console.log("count", count);
    setQuantity(count);
  };

  useEffect(() => {
    productDetailsData();
    // setSimilarProductsData();
  }, [product, id]);

  useEffect(() => {
    setProductDetail(productDetailData);

    // dispatch action for similar products
    // dispatch(getSimilarProduct({id: 1, price: 122}))
  }, [productDetailData]);

  return (
    <PageContainer style="py-10">
      {loading ? (
        <div className="text-center py-10">
          <Loader />
        </div>
      ) : (
        <div className="flex gap-8">
          <div className="w-[50%]">
            <img src={productDetail?.images} alt={productDetail?.title} />
          </div>
          <div className="w-[50%]">
            <div className="text-lg">{productDetail?.category?.name}</div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-left text-uppercase">
              {productDetail?.title}
            </h1>
            <div className="text-sm font-bold">Description:</div>
            <div className="text-sm">{productDetail?.description}</div>
            <div className="pt-6 text-lg font-medium">
              Price - ${productDetail?.price}
            </div>

            <ProductCountController getQuantity={getCount} />

            <div className="flex gap-8 pt-12">
              <button
                className="rounded-lg px-4 py-2 bg-green-700 text-green-100 hover:bg-green-800 duration-300"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              <button
                className="rounded-lg px-4 py-2 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 duration-300"
                onClick={handleNavigate}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pt-14">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-left text-uppercase">
          Similar Products
        </h1>
        <RenderProducts products={similarProducts} />
      </div>
    </PageContainer>
  );
};

export default ProductDetails;
