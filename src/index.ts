import express from "express";
import routes from "./routes";
import knex from "knex";



const app = express();

app.use(routes);
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});