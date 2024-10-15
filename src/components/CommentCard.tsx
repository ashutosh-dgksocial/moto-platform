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
    <div className="max-w-md rounded-lg border border-gray-300 bg-[#f6f4fa]">
      <div className="px-6 py-6">
        <div className="flex justify-between mt-4">
          <div className="flex">{renderStars()}</div>
          <img src={image} alt="User" className="object-cover" />
        </div>
        <p className="mt-4 text-[20px] text-gray-700">{description}</p>
        <div className="mt-4 text-[16px] font-bold text-gray-700">{Name}</div>
      </div>
    </div>
  );
};

export default CommentCard;
