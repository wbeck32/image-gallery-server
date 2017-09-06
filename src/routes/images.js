const express = require('express');
const router = express.Router();
const jsonParser = require('body-parser').json();
const Image = require('../models/Image');

router
  .get('/images', async (req, res, next) => {
    const allImages = await Image.find();
    res.send(allImages);
  })
  .post('/images', async (req, res, next) => {
    const image = new Image(req.body);
    console.log(image.title)
    const find = await Image.find({title: image.title})
    console.log(find)
    find === null ? res.send(await image.save(image)) : res.send(null)
    // const image = new Image(req.body);
    // res.send(response);
  })
  .delete('/images', jsonParser, async (req, res, next) => {
    const { _id } = req.query;
    const deleteOne = await Image.deleteOne({ _id: _id });
    res.send(deleteOne);
  })
  .use(jsonParser);

module.exports = router;
