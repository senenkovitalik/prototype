import React from 'react';
import { Link } from 'react-router-dom';

const List = (props) => {
  let totalCount = 0;
  let totalPrice = 0;

  const toBasket = {
    pathname: `/basket`,
    state: { modal: true }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Count</th>
            <th>Total</th>
          </tr>
          {
            props.products.map((p, i) => {
              const prod = p.product;
              const count = p.count;
              totalCount += count;
              totalPrice += count * prod.price;

              return <tr key={i}>
                <td>{prod.name} {prod.model}</td>
                <td>{count}</td>
                <td>{prod.price * count}</td>
              </tr>
            })
          }
          <tr>
            <td>{null}</td>
            <td>{totalCount}</td>
            <td>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <Link to={toBasket}>Edit products</Link><br />
      <Link to="/">Back to shopping</Link>
    </div>
  )
};

export default List;