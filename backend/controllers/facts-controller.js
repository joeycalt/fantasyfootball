const express = require('express');
const router = express.Router();
const {Facts} = require('../models/Facts')
const { Router, query } = require('express');
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const bodyParser = require('body-parser');
const req = require('express/lib/request');
router.use( bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const path = require('path')

router.get('/',async (req, res) => {
    try{
        const facts = await Facts.find({})
        res.json(facts)
    } catch(err) {
        res.status(400).json(err)
    }
});

router.post('/ffffotw/:id', async (req, res, next) => {
    try {
        const createdFacts = await Facts.create ({desc: req.body.desc, name: req.body.name})
        
        res.redirect(`/ffffotw/${createdFacts.id}`)
    }catch(error) {
        console.log(error);
        return next()
    }
})
    
router.get('/:id', async (req,res)=>{
  try {
    res.json(await Facts.findById(req.params.id))
  } catch (err){
    res.status(400).json(err);
  }
});

module.exports = router