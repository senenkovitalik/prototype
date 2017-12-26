import React from 'react';
import Link from 'react-router-dom';

const Basket = (props) => {
  const toOrder = (e) => {
    e.stopPropagation();
    props.history.push('/order_processing');
  };

  const back = (e) => {
    e.stopPropagation();
    props.history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)'
      }}
    >
      <div className='modal'
           onClick={(e) => {
             e.stopPropagation();
           }}
           style={{
            position: 'absolute',
            background: '#fff',
            top: 25,
            left: '10%',
            right: '10%',
            padding: 15,
            border: '2px solid #444'
      }}>
        <h1>Basket</h1>
        {
          props.products.map((p, i) =>
            <div key={i}>
              <ul>
                <li>Category: {p.product.category}</li>
                <li>Subcategory: {p.product.subcategory}</li>
                <li>Name: {p.product.name}</li>
                <li>Model: {p.product.model}</li>
                <li>Price: {p.product.price}</li>
              </ul>

              <button type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        props.changeCount(p, true);
                      }}
              >+</button>

              <span>{p.count}</span>

              <button type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        props.changeCount(p, false);
                      }}
              >-</button>

              <br />
              <button type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        props.remove(p);
                      }}
              >Remove</button>

              <hr />
            </div>
          )
        }

        <button type="button" onClick={toOrder}>
          To order
        </button>
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Basket;