import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import sharp from "sharp"; 

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadDir = path.join(process.cwd(), "public", "uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `${Date.now()}_${file.name.split('.')[0]}.webp`;
    const filePath = path.join(uploadDir, fileName);

    await sharp(buffer)
      .webp()
      .toFile(filePath);

    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({ message: "File uploaded and converted successfully", fileUrl });
  } catch (err: any) {
    console.error("Upload failed:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
