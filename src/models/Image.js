const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  alt: { type: String, required: false },
  description: { type: String, required: false }
});

module.exports = mongoose.model('Image', imageSchema);
