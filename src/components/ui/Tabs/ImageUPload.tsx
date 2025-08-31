import { updateSkillImage } from "@/funcs/create.server.func";
import Image from "next/image";
import React, { useState } from "react";

interface SkillImageUploaderProps {
  width?: number;
  height?: number;
  skillImage: string;
  skillNumber: 1 | 2 | 3 | 4; // For determining which skill section to update
}

export default function SkillImageUploader({
  width = 300,
  height = 300,
  skillImage,
  skillNumber,
}: SkillImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(skillImage);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create image element
    //@ts-ignore
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, width, height);

      // Convert to WebP format
      const webpDataUrl = canvas.toDataURL("image/webp", 0.9);
      setPreview(webpDataUrl); // Show preview

      // Convert DataURL -> Blob
      const res = await fetch(webpDataUrl);
      const blob = await res.blob();

      // Upload image to the server
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
      // After the image is uploaded, update the skill section with the new image URL
      await updateSkillImage(data.fileUrl, skillNumber);
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

      <div className="w-full h-[250px] border rounded overflow-hidden relative">
        <Image
          fill={true}
          quality={100}
          priority
          placeholder="blur"
          alt="Skill section image"
          src={preview || "/images/default-image.webp"} // Default image if no preview
          blurDataURL="/images/default-image.webp"
          className="object-cover"
        />
      </div>

      {loading && <p className="text-blue-500">Uploading...</p>}
    </div>
  );
}
