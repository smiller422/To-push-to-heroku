

const router = require('express').Router();
const { Project } = require('../../models');
//rec.body is the alternative  to req.params
router.post('/', async (req, res) => {
  console.log("pizzaroutes")
  console.log(req.body)
    try {
      
      req.session.save(() => {
        req.session.user_id = req.body.userId;
      });
  
      res.status(200).json({ message: 'You are now logged in!' });
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

  module.exports = router;


