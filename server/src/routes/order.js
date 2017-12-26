import express from 'express';
const router = express.Router();
import _ from 'lodash';

import orders from '../db/orders';

router.route('/')
  .post((req, res) => {
    res.json({ id: 'xxx' });
  });

router.route('/status/:id')
  .get((req, res) => {
    const result = _.find(orders, { 'id': req.params.id });
    res.json((result === undefined) ? { result: false } : result);
  });

router.route('*')
  .get((req, res) => {
    console.log("No match");
    res.send("Sorry, we cannot find that");
  });

export default router;