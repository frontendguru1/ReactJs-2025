import { useSelector } from "react-redux";
import { PageContainer, ProductCountController } from "../components";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "Wireless Headphones",
  //     price: 99.99,
  //     quantity: 1,
  //     image: "https://via.placeholder.com/80",
  //   },
  //   {
  //     id: 2,
  //     name: "Bluetooth Speaker",
  //     price: 49.99,
  //     quantity: 2,
  //     image: "https://via.placeholder.com/80",
  //   },
  // ];

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const getCount = () => {};

  return (
    <PageContainer style="py-10">
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow p-4 rounded-lg"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  {/* <p className="text-gray-500">Qty: {item.quantity}</p> */}
                  <ProductCountController getQuantity={getCount} />
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-600">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white shadow p-6 rounded-lg h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Items Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="border-t mt-4 pt-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ShoppingCart;
