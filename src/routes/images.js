const express = require('express');
var cors = require('cors');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Image = require('../models/Image');

router
  .get('/', cors(), async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const allImages = await Image.find();
    res.send(allImages);
  })
  .post('/', cors(), async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const image = new Image(req.body);
    const response = await image.save(image);
    res.send(response);
  })
  .delete('/', jsonParser, async (req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    const { id } = req.query;
    const deleteOne = await Image.deleteOne({ _id: id });
    res.send(deleteOne);
  })
  .use(jsonParser);

module.exports = router;

// --albums--for-bonus
//create an album
//add images to an album
//delete images
