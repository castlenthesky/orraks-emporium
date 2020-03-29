import * as mongoose from 'mongoose';
// var mongoseUniqueValidator = require('mongoose-unique-validator');

const materialModel = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Please enter a material type.'],
      lowercase: true,
    },
    rarity: {
      type: String,
      required: [true, 'Please enter an item rarity.'],
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: [true, 'Please enter a material name.'],
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Please enter an item description.'],
      index: true,
    },
    environment: {
      type: Array,
      required: [true, 'Please enter an expected environment for this material.'],
      index: true,
    },
  },
  { timestamps: true },
);

// User.plugin(mongoseUniqueValidator);

module.exports = mongoose.model<mongoose.Document>('Material', materialModel);
