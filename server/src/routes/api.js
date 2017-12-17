import express from 'express';
const router = express.Router();
import { guitars, pedals, combo } from '../db/products';

// something like DB
import categories from '../db/categories';

router.route('/categories')
  .get((req, res) => {
    res.json(categories);
  });

router.route('/:category')
  .get((req, res) => {
    res.send("Fuck");
  });

export default router;