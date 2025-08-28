"use client";
import React, { useState } from "react";
import ImageUploader from "./Image";

interface Skill {
  id: number;
  name: string;
  image: string | null;
}

export default function About() {
  const [firstHeader, setFirstHeader] = useState("");
  const [secondHeader, setSecondHeader] = useState("");
  const [description, setDescription] = useState("");

  const [facebook, setFacebook] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [skillsHeader, setSkillsHeader] = useState("");
  const [skillsAbout, setSkillsAbout] = useState("");
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillName, setSkillName] = useState("");

  const addSkill = () => {
    if (!skillName.trim()) return;
    setSkills((prev) => [
      ...prev,
      { id: Date.now(), name: skillName, image: null },
    ]);
    setSkillName("");
  };

  const removeSkill = (id: number) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSkillImage = (id: number, file: File | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setSkills((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, image: reader.result as string } : s
        )
      );
    };
    reader.readAsDataURL(file);
  };

  // 🔹 Video Section
  const [videoHeader, setVideoHeader] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  // 🔹 Last Section
  const [lastHeader, setLastHeader] = useState("");
  const [string, setString] = useState("");
  const [lastArray, setLastArray] = useState<string[]>([
    "this is the first",
    "this second",
    "this third",
    "it can be anything",
  ]);

  const handleAddPoint = () => {
    if (string.trim() === "") return;
    setLastArray((prev) => [...prev, string]);
    setString("");
  };

  const handleDeletePoint = (index: number) => {
    setLastArray((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full h-full">

        <h2 className="text-2xl font-bold tracking-wide text-shadow-lg w-full text-center my-4">Home Page Content</h2>
        <div className="w-full flex flex-col md:flex-row items-center flex-wrap justify-center gap-3 p-3">
        {/* First Header */}
        <div className="md:w-[40%] w-[90%] h-auto flex flex-col items-start bg-white justify-start p-2 rounded-sm shadow-md">
            <small className="text-[#00111d] text-sm font-bold">
            First Header :
            </small>
            <input
            type="text"
            value={firstHeader}
            onChange={(e) => setFirstHeader(e.target.value)}
            placeholder="First Header"
            className="w-full h-auto p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
            />
        </div>

        {/* Second Header */}
        <div className="md:w-[40%] w-[90%] flex flex-col items-start bg-white justify-start p-2 rounded-sm shadow-md">
            <small className="text-[#00111d] text-sm font-bold">
            Second Header :
            </small>
            <input
            type="text"
            value={secondHeader}
            onChange={(e) => setSecondHeader(e.target.value)}
            placeholder="Second Header"
            className="w-full h-auto p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
            />
        </div>

        {/* Description */}
        <div className="md:w-[40%] w-[90%] h-auto flex flex-col items-start bg-white justify-start p-2 rounded-sm shadow-md">
            <small className="text-[#00111d] text-sm font-bold">
            Description :
            </small>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full h-auto p-2 min-h-[100px] max-h-[300px] rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
            />
        </div>

        {/* Image Uploader */}
        <div className="md:w-[40%] w-[90%] h-auto flex flex-col items-start justify-start p-2 rounded-sm shadow-md">
            <ImageUploader apiEndpoint="" />
        </div>

        {/* Social Links */}
        <div className="md:w-[40%] w-[90%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
            <h2 className="text-sm font-bold border-b border-[#00111d]">
            Social links:
            </h2>
            <div className="p-2 w-full">
            <h3>Facebook:</h3>
            <input
                type="text"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="Facebook"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
            <div className="p-2 w-full">
            <h3>Linkedin:</h3>
            <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="Linkedin"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
            <div className="p-2 w-full">
            <h3>WhatsApp:</h3>
            <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
            <div className="p-2 w-full">
            <h3>Email:</h3>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
            <div className="p-2 w-full">
            <h3>Contact:</h3>
            <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Contact"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
        </div>

        {/* Skills Section */}
        <div className="md:w-[40%] w-[90%] h-auto flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
            <h2 className="text-sm font-bold border-b border-[#00111d]">Skills:</h2>

            <div className="p-2 w-full">
            <h3>Header:</h3>
            <input
                type="text"
                value={skillsHeader}
                onChange={(e) => setSkillsHeader(e.target.value)}
                placeholder="Header"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>

            <div className="p-2 w-full">
            <h3>About:</h3>
            <textarea
                value={skillsAbout}
                onChange={(e) => setSkillsAbout(e.target.value)}
                placeholder="Short Description"
                className="w-full min-h-[100px] max-h-[250px] p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>

            {/* Skill add form */}
            <div className="flex gap-2 w-full mt-2">
            <input
                type="text"
                placeholder="Skill name"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
                className="flex-1 p-2 border rounded-sm"
            />
            <button
                onClick={addSkill}
                className="bg-[#00111d] text-white px-4 py-2 text-sm rounded-sm"
            >
                Add
            </button>
            </div>

            {/* Skill list */}
            <div className="w-full mt-3 space-y-2">
            {skills.map((skill) => (
                <div
                key={skill.id}
                className="flex items-center justify-between border p-2 rounded-sm"
                >
                <div className="flex items-center gap-3">
                    {/* Image Upload */}
                    <label className="cursor-pointer">
                    {skill.image ? (
                        <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-12 h-12 object-cover rounded-full border"
                        />
                    ) : (
                        <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full text-xs text-gray-500">
                        Upload
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                        handleSkillImage(skill.id, e.target.files?.[0] || null)
                        }
                    />
                    </label>
                    <span className="font-medium">{skill.name}</span>
                </div>
                <button
                    onClick={() => removeSkill(skill.id)}
                    className="text-red-500 hover:text-red-700"
                >
                    Delete
                </button>
                </div>
            ))}
            </div>
        </div>

        {/* Video Section */}
        <div className="md:w-[40%] w-[90%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
            <h2 className="text-sm font-bold border-b border-[#00111d]">
            Video Section:
            </h2>
            <div className="p-2 w-full">
            <h3>Video header:</h3>
            <input
                type="text"
                value={videoHeader}
                onChange={(e) => setVideoHeader(e.target.value)}
                placeholder="Video header"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
            <div className="p-2 w-full">
            <h3>Video:</h3>
            <input
                type="file"
                onChange={(e) =>
                setVideoFile(e.target.files ? e.target.files[0] : null)
                }
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
        </div>

        {/* Last Section */}
        <div className="md:w-[40%] w-[90%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
            <h2 className="text-sm font-bold border-b border-[#00111d]">
            Last Section:
            </h2>
            <div className="p-2 w-full">
            <h3>Header:</h3>
            <input
                type="text"
                value={lastHeader}
                onChange={(e) => setLastHeader(e.target.value)}
                placeholder="Header"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
            />
            </div>
            <div className="p-2 w-full">
            <h3>Points:</h3>
            <div className="w-full h-auto border border-[#2323] p-2 rounded-md mt-2">
                {lastArray.map((ele, index) => (
                <div
                    key={index}
                    className="w-full h-auto border border-[#2323] p-2 rounded-md mt-2 flex justify-between items-center"
                >
                    <h3>{ele}</h3>
                    <button
                    onClick={() => handleDeletePoint(index)}
                    className="bg-red-600 text-white px-2 text-sm active:scale-105 transition-all duration-300 cursor-pointer rounded-sm"
                    >
                    Delete
                    </button>
                </div>
                ))}
            </div>
            <div className="w-full h-[50px] p-2 flex items-center justify-between">
                <input
                type="text"
                value={string}
                onChange={(e) => setString(e.target.value)}
                placeholder="Write here"
                className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
                />
                <button
                onClick={handleAddPoint}
                className="bg-[#00111d] text-white px-4 py-2 text-sm active:scale-105 transition-all duration-300 cursor-pointer rounded-sm mt-2 ml-2"
                >
                Add
                </button>
            </div>
            </div>
        </div>
        </div>
        
        <h2 className="text-2xl font-bold tracking-wide text-shadow-lg w-full text-center my-4">About Page Content</h2>

        <div className="w-full h-auto flex flex-col md:flex-row items-center flex-wrap justify-center gap-3 p-3">

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>About Section description:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
                </div>
            </div>

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>First information:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
                    <ImageUploader apiEndpoint="https://api.imgbb.com/1/upload?key=3d0f3f2e5d8c4d4e8d8c4d4e8d8c4d4e" />
                </div>
            </div>

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>Second information:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
                    <ImageUploader apiEndpoint="https://api.imgbb.com/1/upload?key=3d0f3f2e5d8c4d4e8d8c4d4e8d8c4d4e" />
                </div>
            </div>

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>Therd information:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
                    <ImageUploader apiEndpoint="https://api.imgbb.com/1/upload?key=3d0f3f2e5d8c4d4e8d8c4d4e8d8c4d4e" />
                </div>
            </div>

        </div>

        <h2 className="text-2xl font-bold tracking-wide text-shadow-lg w-full text-center my-4">Contact Page Content</h2>

        <div className="w-full h-auto flex flex-col md:flex-row items-center flex-wrap justify-center gap-3 p-3">

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>First information:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
                    <ImageUploader apiEndpoint="https://api.imgbb.com/1/upload?key=3d0f3f2e5d8c4d4e8d8c4d4e8d8c4d4e" />
                </div>
            </div>

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>Location:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
                </div>
            </div>

        </div>

        <div className="h-[100px]"></div>

    </div>
  );
}
