import mongoose from "mongoose";

export async function ConnectToMongo(): Promise<void> {
  try {
    const ConnectionString = process.env.MOGOURL;
    if (ConnectionString) {
      await mongoose.connect(ConnectionString);
    } else throw new Error("Connection string won't come from .env");
  } catch (error:any) {
    console.error(error.message|| "error connecting db");
  }
}
