"use client";
import { updateHomeSectionImage } from "@/funcs/create.server.func";
import Image from "next/image";
import React, { useState } from "react";

export default function ImageUploader({
  width = 300,
  height = 300,
  previewImage
}: {
  width?: number;
  height?: number;
  previewImage?: string;
}) {
  const [preview, setPreview] = useState<string | null>();
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create image element
    //@ts-ignore
    const img = new Image();
    img.src = URL.createObjectURL("file");

    img.onload = async () => {
        
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, width, height);

      // Convert to WebP
      const webpDataUrl = canvas.toDataURL("image/webp", 0.9);
      setPreview(webpDataUrl); // show preview

      // Convert DataURL -> Blob
      const res = await fetch(webpDataUrl);
      const blob = await res.blob();

      // Upload
      handleUpload(blob);
    };
  };

  // Upload function
  const handleUpload = async (blob: Blob) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", blob, "image.webp");

      const res = await fetch("http://localhost:3000/fileupload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      
      await updateHomeSectionImage(data.fileUrl)

      alert("Upload success!");
      
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-start bg-white justify-start p-2 rounded-sm shadow-md text-black">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2 w-full p-4"
      />

      {/* {preview && ( */}
        <div className="w-full h-[250px] border rounded overflow-hidden relative">
          <Image 
            fill={true}
            quality={100}
            priority
            placeholder="blur"
            alt="User profile picture"
            src={"https://img.freepik.com/premium-photo/modern-car-white-background-studio_900706-23056.jpg"}
            blurDataURL="/images/Profile2.webp"
            className="object-cover" />
        </div>
      {/* )} */}

    <a
  href="https://img.freepik.com/premium-photo/modern-car-white-background-studio_900706-23056.jpg"
  download
  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
  </svg>
  Download Image
</a>



      {loading && <p className="text-blue-500">Uploading...</p>}
    </div>
  );
}
