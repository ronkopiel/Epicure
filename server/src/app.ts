import express from "express";
import routes from "../src/routes/index";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from '../connection';
import dotenv from "dotenv"
dotenv.config()
const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use(routes);


app.listen(process.env.PORT, () => console.log("Listening..."));
connectToDB()