import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const CategoriesMenu = (props) => {
  return (
    <ListGroup flush>
      <ListGroupItem >
        <NavLink to="/">All products</NavLink>
      </ListGroupItem>
      {props.categories.map((category) => {
        return (
          <ListGroupItem key={category.title}>
            <NavLink to={`/products/categories/${category._id}`}>
              {category.title}
            </NavLink>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default CategoriesMenu;
