import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="category-card">
      <img src={props.img} alt="" />
      <div className="overlay"></div>
      <p>{props.text}</p>
    </div>
  );
};

export default CategoryCard;
