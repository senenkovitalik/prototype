import React from 'react';
import './style.css';

const Product = (props) => (
  <div>
    <h3>{props.p.name} {props.p.model}</h3>
    <p>{props.p.description}</p>
    <p>Price: {props.p.price}</p>

    <button type="button"
            disabled={props.inBasket}
            onClick={(e) => {
              e.preventDefault();
              props.add(props.p);
            }}>Buy
    </button>

    <br/>

    <span onClick={() => props.history.goBack()}
          className="backLink"
    >Back to shopping</span>

  </div>
);

export default Product;