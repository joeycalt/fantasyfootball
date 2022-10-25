const express = require('express');
const router = express.Router();
const {Facts} = require('../models/Facts')

router.get('/',async (req, res) => {
    try{
        const facts = await Facts.find({})
        res.json(facts)
    } catch(err) {
        res.status(400).json(err)
    }
});

router.post("/", async (req, res) => {
  try {
    res.json(await Facts.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});
    
router.get('/:id', async (req,res)=>{
  try {
    res.json(await Facts.findById(req.params.id))
  } catch (err){
    res.status(400).json(err);
  }
});

module.exports = router