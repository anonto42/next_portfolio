"use server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL || "";


if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the DATABASE_URL in your environment variables.");
}

export default async function dbConnect() {
  
  await mongoose.connect(MONGODB_URI)
    .then(()=>{
      console.log("DB Connected!")
    })
}
