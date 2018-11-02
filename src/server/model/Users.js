import mongoose from "mongoose";

const schema = mongoose.Schema({
  created: { type: Date, default: Date.now },
  name: String,
  email: String,
  password: String
});

export default mongoose.model("User", schema);
