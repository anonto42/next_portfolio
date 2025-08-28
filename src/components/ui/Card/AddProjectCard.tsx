"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function AddProjectCard() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [blogContent, setBlogContent] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Project Title:", title);
    console.log("Selected Image:", image);
    console.log("Blog Content:", blogContent);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#23232357] p-6 absolute z-50 text-black top-0">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Project</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Project Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter project title"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Project Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
              required
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-48 h-32 object-cover rounded-lg border"
                />
              </div>
            )}
          </div>

          {/* Blog / Description */}
          <div>
            <label className="block text-sm font-medium mb-2">Project Blog / Description</label>
            <JoditEditor
              value={blogContent}
              onChange={(newContent) => setBlogContent(newContent)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
}
