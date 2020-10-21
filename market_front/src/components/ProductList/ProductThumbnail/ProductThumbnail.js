import React from "react";
import defaultImage from "../../../assets/images/default.jpg";
import config from "../../../config";

const ProductThumbnail = props => {
  let image = defaultImage;
  if (props.image) {
    image = config.apiURL + "/uploads/" + props.image;
  }
  return <img src={image} alt={props.title} style={{
    float: "left",
    width: "100px",
    height: "auto",
    marginRight: "15px"
  }} />
};

export default ProductThumbnail;