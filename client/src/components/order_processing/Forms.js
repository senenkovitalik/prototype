import React from 'react';

const Forms = (props) => {
  const confirm = (e) => {
    e.preventDefault();
    props.history.push(`${props.match.path}/status`);
  };

  return (
    <div>
      <h3>User data</h3>

      <form>
        <label>User name <input type="text" name="username" /></label><br />
        <label>Phone <input type="tel" name="phone" /></label><br />
        <button type="button">Accept</button>
      </form>

      <hr />

      <h3>Delivery</h3>

      <form>
        <label>Type of delivery
          <select>
            <option>Self-checkout</option>
            <option>By courier (additional fee)</option>
          </select>
        </label>
        <br />
        <label>Address <input type="text" /></label><br />
        <button type="button"
                onClick={(e) => {
                  e.preventDefault();
                  props.sendOrder();
                  props.history.push(`${props.match.path}/status`);
                }}
        >Confirm</button>
      </form>
    </div>
  );
};

export default Forms;