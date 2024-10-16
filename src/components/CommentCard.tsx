// CardComponent.tsx
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface CardComponentProps {
  description: string;
  Name: string;
  image: string;
  rating: number;
}

const CommentCard: React.FC<CardComponentProps> = ({
  description,
  Name,
  image,
  rating,
}) => {
  // Function to render stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<AiFillStar key={i} size={22} className="text-yellow-500" />);
      } else {
        stars.push(<AiOutlineStar key={i} size={22} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="max-w-md rounded-xl border border-gray-300 bg-[#f6f4fa] hover:border-[#46d993] transition duration-300">
      <div className="px-6 py-6">
        <div className="flex justify-between mt-4">
          <div className="flex">{renderStars()}</div>
          <img src={image} alt="User" className="object-cover" />
        </div>
        <p className="mt-4  sm:text-[10px] md:text-[14px] lg:text-[18px] xl-text-[30px] text-gray-700">{description}</p>
        <div className="mt-4 text-[16px] font-bold text-gray-700">{Name}</div>
      </div>
    </div>
  );
};

export default CommentCard;
