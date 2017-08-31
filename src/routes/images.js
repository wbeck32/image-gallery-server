const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Image = require('../models/Image');

router
  .get('/', async (req, res, next) => {
    const allImages = await Image.find();
    res.send(allImages);
  })
  .post('/', async (req, res, next) => {
    const image = new Image(req.body);
    const response = await image.save(image);
    res.send(response);
  })
  .delete('/', jsonParser, async (req, res, next) => {
    const { id } = req.query;
    const deleteOne = await Image.deleteOne({ _id: id });
    res.send(deleteOne);
  })
  .use(jsonParser);

module.exports = router;

//get all images
//delete an image
//post an image
// --albums--for-bonus
//create an album
//add images to an album
//delete images
