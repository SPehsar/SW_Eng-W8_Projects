const mongoose = require("mongoose")

const pokemonSchema = new mongoose.Schema({
  name: {type: String, required: true},
  img: {type: String, required: true} // *** Not sure if it should be href
},
{
  timestamps: true
})

const Pokemon = mongoose.model("Pokemon", pokemonSchema, 'pokemon')// 'pokemon'

module.exports = Pokemon