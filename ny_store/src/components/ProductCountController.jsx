import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const ProductCountController = ({ getQuantity }) => {
  const [count, setCount] = useState(1);

  const handleProductCount = (action) => {
    if (action == "inc") {
      setCount((prev) => {
        const updatedCount = ++prev;
        getQuantity(updatedCount);
        return updatedCount;
      });
    }

    if (action == "dec") {
      setCount((prev) => {
        if (prev > 1) {
          const updatedCount = prev - 1;
          getQuantity(updatedCount);
          return updatedCount;
        }
        getQuantity(prev);
        return prev;
      });
    }
  };

  return (
    <div className="flex gap-2 mt-8">
      <button
        className="cursor-pointer"
        onClick={() => handleProductCount("dec")}
      >
        <Minus />
      </button>
      <input
        type="text"
        name=""
        id=""
        value={count}
        className="w-[30px] text-center"
        onChange={(e) => setCount(e.target.value)}
      />
      <button
        className="cursor-pointer"
        onClick={() => handleProductCount("inc")}
      >
        <Plus />
      </button>
    </div>
  );
};

export default ProductCountController;
