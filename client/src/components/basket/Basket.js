import React from 'react';

const Basket = (props) => {
  const back = (e) => {
    e.stopPropagation();
    props.history.goBack();
  };

  const remove = (e, product) => {
    e.preventDefault();
    props.store.remove(product);
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
          props.products.map((prod, i) =>
            <ul key={i}>
              <li>Category: {prod.category}</li>
              <li>Subcategory: {prod.subcategory}</li>
              <li>Name: {prod.name}</li>
              <li>Model: {prod.model}</li>
              <li>Price: {prod.price}</li>
              <button type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        props.remove(prod);
                      }}
              >Remove</button>
            </ul>
          )
        }
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Basket;