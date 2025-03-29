const NewArrivals = () => {
  const products = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
    price: `$${(10 + index * 2).toFixed(2)}`,
    image: "https://placehold.co/400",
  }));

  return (
    <div className="mx-auto pt-14">
      <h2 class="text-3xl font-semibold text-gray-800 mb-6 text-center text-uppercase">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden p-4 group"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">
              {product.title}
            </h3>
            <p className="text-gray-500">{product.price}</p>
            <button className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-50 transition duration-300">
              <span className="w-[100] h-9 bg-black inline-block">
                Add to Cart
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
