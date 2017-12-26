import React from 'react';

const Summary = (props) => (
  <table>
    <tbody>
    <tr>
      <td>Number of products:</td>
      <td>{props.totalCount}</td>
    </tr>
    <tr>
      <td>Total price:</td>
      <td>{props.totalPrice}</td>
    </tr>
    </tbody>
  </table>
);

export default Summary;