import React from "react";
import Star from "assets/icons/star-solid.svg";
import StarHalf from "assets/icons/star-solid-half.svg";

export default function Rating() {
  return (
    <div clasName="rating">
      <Star />
      <Star />
      <Star />
      <Star />
      <StarHalf />
    </div>
  );
}
