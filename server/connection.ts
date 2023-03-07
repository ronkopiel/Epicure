import { connect } from "mongoose";

const uri = "mongodb+srv://ronkopiel:ykyw3oRBLlnlccNw@epicure.i4eqv3c.mongodb.net/?retryWrites=true&w=majority"

const dbName = "epicure";

export const connectToDB = async () => {
  try {
    await connect(`${uri}${dbName}`);
    console.log("db connected");
  } catch (err) {
    console.log("error connecting to DB", err);
  }
};
