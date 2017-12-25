import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => (
  <div>
    <ul>
      <li>Category: {props.product.category}</li>
      <li>Subcategory: {props.product.subcategory}</li>
      <li>Name: {props.product.name}</li>
      <li>Model: {props.product.model}</li>
      <li>Price: {props.product.price}</li>

    </ul>
    <Link to={`/${props.product.category}/${props.product.subcategory}/${props.product.name}/${props.product.model}`}>More...</Link>
    <br />
    <button type="button"
            disabled={props.inBasket}
            onClick={(e) => {
              e.preventDefault();
              props.add(props.product);
            }}
    >Buy</button>
  </div>
);

export default ProductItem;