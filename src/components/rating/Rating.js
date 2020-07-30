import React from "react";
import Star from "@icons/ui/star-solid.js";
import StarHalf from "@icons/ui/star-solid-half.js";

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
