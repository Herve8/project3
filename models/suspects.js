// Creating our User model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const suspectSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  sex: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  hairType: { type: String, required: true },
  hairColour: { type: String, required: true },
  hairLength: { type: String, required: true },
  ponyTail: { type: String, required: false },
  eyesColour: { type: String, required: false },
  glasses: { type: String, required: false },
  complexion: { type: String, required: true },
  scars: { type: String, required: false },
  tattoos: { type: String, required: false },
  earShape: { type: String, required: false },
  eyebrowsShape: { type: String, required: false },
  noseShape: { type: String, required: false },
  race: { type: String, required: true },
  teethMissing: { type: String, required: false },
  wrinkles: { type: String, required: false },
  faceShape: { type: String, required: true },
  faceShape: { type: String, required: true },
  neck: { type: String, required: false },
  moustache: {type: String, required: false},
  beard: { type: String, required: true },
  goatee: { type: String, required: true },
  sideburns: { type: String, required: true },

  image: {
    data: Buffer,
    type: String,
    required: true,
  },
});
const Suspect = mongoose.model("Suspect", suspectSchema);

module.exports = Suspect;
