import React from "react";
import {Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ProductThumbnail from "../ProductThumbnail/ProductThumbnail";

const ProductListItem = props => {
  return (
    <Card>
      <CardBody>
        <Link to={`/products/${props.id}`}>
          <ProductThumbnail
            image={props.image}
            title={props.title}
          />
        </Link>
        <Link to={`/products/${props.id}`}>
          {props.title}
        </Link>

        <strong className="ml-2">{props.price} USD</strong>
        <p>Category: {props.category.title}</p>
      </CardBody>
    </Card>
  );
};

ProductListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.number
    ]
  ).isRequired,
  image: PropTypes.string,
  category: PropTypes.object.isRequired
};

export default ProductListItem;