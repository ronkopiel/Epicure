import { connect } from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const token = process.env.TOKEN_SECRET
const uri = token

const dbName = "epicure";

export const connectToDB = async () => {
  try {
    await connect(`${uri}${dbName}`);
    console.log("db connected");
  } catch (err) {
    console.log("error connecting to DB", err);
  }
};
