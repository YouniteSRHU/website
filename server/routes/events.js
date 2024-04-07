import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({name: 'YouthFest', status:'success'});
});

export default router;
