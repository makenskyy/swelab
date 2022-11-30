const mongoose = require("mongoose");
const app = require("./app");

const DB = "mongodb+srv://myrza:myrza@cluster0.vl97ciz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = 8000;
const server = app.listen(port, () => {
  console.log(`App running on ${port}`);
});
