const mongoose = require('mongoose');

const JamSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    decade: {
      type: Number,
      required: true
    },
    lastPlayed: {
      type: Date,
      default: Date.now()
    },
    isFavorite: {
      type: Boolean,
      default: false
    },
    myCapo: {
      type: Number,
      default: 0
    },
    tabLink: {
      type: String
    },
    vidLink: {
      type: String
    }
  }
)

module.exports = mongoose.model('Jam', JamSchema)