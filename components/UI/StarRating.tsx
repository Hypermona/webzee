import React from "react";
import StarIcon from "./StarIcon";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "large";
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5, size }) => {
  const stars = Array.from({ length: maxStars }, (_, index) => index + 1);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {stars.map((star) => {
        const fillPercentage = Math.min(Math.max(rating - star + 1, 0), 1) * 100;
        const cls = size === "large" ? "h-5 w-5" : "h-3 w-3";
        const containerCls = size === "large" ? "h-5 w-7" : "h-3 w-5";
        return (
          <div
            key={star}
            style={{
              position: "relative",
              zIndex: 0,
            }}
            className={containerCls}
          >
            <StarIcon color="gray" className={cls} />

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: `${fillPercentage}%`,
                height: "100%",
                overflow: "hidden",
              }}
            >
              <StarIcon color="white" className={cls} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
