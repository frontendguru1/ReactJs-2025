import { Link } from "react-router";

const CategoryCard = ({ data }) => {
  return (
    <Link to={`/category/${data.id}`} className="flex-1">
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center"
        key={data.id}
      >
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-700">
          {data.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
