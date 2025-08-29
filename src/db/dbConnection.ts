"use server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL || "";

console.log(MONGODB_URI)

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the DATABASE_URL in your environment variables.");
}

// let cached = (global as any).mongoose;

// if (!cached) {
//   cached = (global as any).mongoose = { conn: null, promise: null };
// }

export default async function dbConnect() {
  // if (cached.conn) {
  //   return cached.conn;
  // }

  // if (!cached.promise) {
  //   cached.promise = mongoose
  //     .connect(MONGODB_URI, {
  //       bufferCommands: false,
  //     })
  //     .then((mongoose) => mongoose);
  // }

  // cached.conn = await cached.promise;
  // console.log("Db connected!")
  // return cached.conn;

  await mongoose.connect(MONGODB_URI)
    .then(()=>{
      console.log("DB Connected!")
    })
}
