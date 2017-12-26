import express from 'express';
const router = express.Router();
import _ from 'lodash';

import order from './order';

// something like DB
import categories from '../db/categories';
import { products } from '../db/products';

router.route('/random')
  .get((req, res) => {
    let prods = [];
    categories.forEach((category) => {
      category.children.forEach((child) => {
        const cond = {
          "category": category.name,
          "subcategory": child
        };

        prods = _.concat(prods, (_.slice(_.filter(products, cond), 0, 3)));
      });
    });

    res.json(prods);
  });

router.use('/order', order);

router.route('/categories')
  .get((req, res) => {
    res.json(categories);
  });

router.route('/:category')
  .get((req, res) => {
    res.json(_.filter(products, { "category": req.params.category }));
  });

router.route('/:category/:child')
  .get((req, res) => {
    res.json(_.filter( products, { "category": req.params.category, "subcategory": req.params.child }) );
  });

router.route('/:category/:child/:name/:model')
  .get((req, res) => {

    const condObj = {
      "category": req.params.category,
      "subcategory": req.params.child,
      "name": req.params.name,
      "model": req.params.model
    };

    const prod = _.find(products, condObj);

    res.json(prod);
  });


export default router;