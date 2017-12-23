import _ from 'lodash';

const store = (function(){
  let products = [];

  function add(p) {
    products = _.union(products, [p])
  }

  function remove(p) {
    products = _.without(products, p);
  }

  function getAll() {
    return products;
  }

  return {
    add: add,
    remove: remove,
    getAll: getAll
  }
})();

export default store;