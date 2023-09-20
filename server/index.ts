import express from "express";
import cors from "cors";
import db from "./models";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Connection to postgreSQL
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
  });
});