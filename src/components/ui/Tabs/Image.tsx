"use client";
import React, { useState } from "react";

interface ImageUploaderProps {
  apiEndpoint: string;
  width?: number;
  height?: number;
}

export default function ImageUploader({
  apiEndpoint,
  width = 300,
  height = 300,
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create image element
    const img = new Image();
    img.src = URL.createObjectURL(file);

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

      const res = await fetch(apiEndpoint, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      console.log("Uploaded successfully:", data);
      alert("Upload success!");
      
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p- border rounded-lg shadow-md flex flex-col gap-3 items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2 w-[200px] p-4"
      />

      {preview && (
        <div className="max-w-[300px] h-[300px] border rounded overflow-hidden">
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        </div>
      )}

      {loading && <p className="text-blue-500">Uploading...</p>}
    </div>
  );
}
