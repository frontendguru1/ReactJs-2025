const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="relative bg-white shadow-lg rounded-lg overflow-hidden p-4 group"
    >
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-700">
        {product.title}
      </h3>
      <p className="text-gray-500">${product.price}</p>
      <button className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-50 transition duration-300">
        <span className="w-[100] h-9 bg-black inline-block">Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
