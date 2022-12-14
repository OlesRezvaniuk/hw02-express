// mongodb+srv://OlesRezvaniuk:je6QaGhJ3S7o6rof@cluster0.vdoofov.mongodb.net/test

const config = require("./config");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log("mongoo is conected"))
  .catch((error) => console.log(error.message));
