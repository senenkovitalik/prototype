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
    res.json((result === undefined) ? false : result);
  });

// stub route, cause /api/order/status/ => /api/:category/:child,
// but we don't want this
router.route('/status/')
  .get((req, res) => {
    res.json({ result: false });
  });

export default router;