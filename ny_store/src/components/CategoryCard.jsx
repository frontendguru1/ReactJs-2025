const CategoryCard = ({ data }) => {
  return (
    <div
      class="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center"
      key={data.id}
    >
      <img
        src={data.image}
        alt={data.name}
        class="w-full h-40 object-cover rounded"
      />
      <h3 class="mt-4 text-lg font-semibold text-gray-700">{data.name}</h3>
    </div>
  );
};

export default CategoryCard;
