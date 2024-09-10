import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const StarRating = () => {
  const [starSelected, setStartSelected] = useState(0);
  const [starHoverSelected, setStarHoverSelected] = useState(0);
  
  const handleMouseEnter = (index: number) => {
    setStarHoverSelected(index + 1);
  };
  const handleMouseLeave = () => {
    setStarHoverSelected(0);
  };
  return (
    <div className="flex justify-center items-center gap-8 text-8xl mt-8">
      {[...Array(5)].map((_, index) => {
        return index < starHoverSelected || index < starSelected ? (
          <FaStar
            onClick={() => setStartSelected(index + 1)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        ) : (
          <FaRegStar
            onClick={() => setStartSelected(index + 1)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
