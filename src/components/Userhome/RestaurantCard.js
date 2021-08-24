import React from "react";
import "./Card.css";
import MenuModal from "./MenuModal";

export default function RestaurantCard(props) {
  return (
    <MenuModal
      Name={props.Name}
      Image={props.Image}
      Rating={props.Rating}
      time={props.time}
      cuisine={props.cuisine}
      discount={props.discount}
    />
  );
}
