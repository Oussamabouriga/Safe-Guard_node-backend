import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import programme from "./routes/programme.js";

const app = express();
const hostname = "127.0.0.1";
const port = process.env.PORT || 9090;
const databaseName = "safeguardDB";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://${hostname}:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//app.use(express.urlencoded({ extended: true })); // Pour analyser application/x-www-form-urlencoded
app.use("/img", express.static("public/images"));

app.use("/programme", programme);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
