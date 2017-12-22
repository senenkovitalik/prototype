import React from 'react';
import { Link } from 'react-router-dom';

const List = (props) => (
  <div>
    <hr />
    <p>List of products</p>
    {
      props.products.map((prod, i) => (
        <div key={i}>
          <ul>
            <li>Category: {prod.category}</li>
            <li>Subcategory: {prod.subcategory}</li>
            <li>Name: {prod.name}</li>
            <li>Model: {prod.model}</li>
            <li>Price: {prod.price}</li>
            <Link to={`/${prod.category}/${prod.subcategory}/${prod.name}/${prod.model}`}>More...</Link>
          </ul>
        </div>
      ))
    }
  </div>
);

export default List;