"use client";
import React, { useEffect, useState } from "react";
import ImageUploader from "./Image";
import { updateHomeComplitedProjects, updateHomeContact, updateHomeDescription, updateHomeEmail, updateHomeFacebook, updateHomeFirstHeading, updateHomeLastSection, updateHomeLinkedin, updateHomeSecondHeading, updateHomeSkillsDescription, updateHomeSkillsHeader, updateHomeVideoSectionHeader, updateHomeWhatsapp, updateHomeYearsOfExperiyances, updateSkillHeadingWithNumber, updateSkillImage } from "@/funcs/create.server.func";
import { getHomePageData } from "@/funcs/get.server.func";
import Image from "next/image";
import SkillImageUploader from "./ImageUPload";

interface Skill {
  id: number;
  name: string;
  image: string | null;
}

export default function About() {
  const [firstHeader, setFirstHeader] = useState<string>("");
  const [secondHeader, setSecondHeader] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [complitedProjects,setProjects] = useState<string>("");
  const [yearsofexpriyeans,setExperiyeans] = useState<string>("");
  const [previewImage, setPreviewImage] = useState<string>("");

  const [facebook, setFacebook] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const [skillsHeader, setSkillsHeader] = useState<string>("");
  const [skillsAbout, setSkillsAbout] = useState<string>("");
  const [skill1Heading, setSkill1Heading] = useState<string>("");
  const [skill2Heading, setSkill2Heading] = useState<string>("");
  const [skill3Heading, setSkill3Heading] = useState<string>("");
  const [skill1Image, setSkill1Image] = useState<string>("");
  const [skill1ImageFile, setSkill1ImageFile] = useState<File>();
  const [skill2Image, setSkill2Image] = useState<string>("");
  const [skill3Image, setSkill3Image] = useState<string>("");
  
  const [videoHeader, setVideoHeader] = useState<string>("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const [lastHeader, setLastHeader] = useState<string>("");
  const [string, setString] = useState<string>("");
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


  useEffect(()=>{
    getHomePageData()
    .then( ({HeroSection, links, videoSection, skills, lastSection}) => {

        console.log(skills)
        
        setFirstHeader(HeroSection.firstHeader)
        setSecondHeader(HeroSection.secondHeader)
        setDescription(HeroSection.discription)
        setExperiyeans(HeroSection.expriyeans)
        setProjects(HeroSection.projects)
        setPreviewImage(HeroSection.image)

        setFacebook(links.facebook)
        setLinkedin(links.linkedin)
        setEmail(links.email)
        setWhatsapp(links.whatsapp)
        setContact(links.contact)

        setSkillsHeader(skills.title)
        setSkillsAbout(skills.description)
        setSkill1Heading(skills.div1.title)
        setSkill1Image(skills.div1.image)

        setVideoHeader(videoSection.title)
        // Main video also weating for hear

        setLastHeader(lastSection.title)
        // Have to work for the points
    })
  },[])

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
            <button
                onClick={()=>updateHomeFirstHeading(firstHeader)} 
                className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
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
            <button
                onClick={()=>updateHomeSecondHeading(secondHeader)} 
                className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
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
            <button
                onClick={()=>updateHomeDescription(description)} 
                className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
        </div>

        {/* Experience Header */}
        <div className="md:w-[40%] w-[90%] flex flex-col items-start bg-white justify-start p-2 rounded-sm shadow-md">
            <small className="text-[#00111d] text-sm font-bold">
            Experience:
            </small>
            <input
            type="text"
            value={yearsofexpriyeans}
            onChange={(e) => setExperiyeans(e.target.value)}
            placeholder="Second Header"
            className="w-full h-auto p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
            />
            <button
                onClick={()=>updateHomeYearsOfExperiyances(yearsofexpriyeans)} 
                className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
        </div>

        {/* Complited Projects */}
        <div className="md:w-[40%] w-[90%] flex flex-col items-start bg-white justify-start p-2 rounded-sm shadow-md">
            <small className="text-[#00111d] text-sm font-bold">
                Projects:
            </small>
            <input
            type="text"
            value={complitedProjects}
            onChange={(e) => setProjects(e.target.value)}
            placeholder="Total completed"
            className="w-full h-auto p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
            />
            <button
                onClick={()=>updateHomeComplitedProjects(complitedProjects)} 
                className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
        </div>

        {/* Image Uploader */}
        <div className="md:w-[40%] w-[90%] h-auto flex flex-col items-start justify-start p-2 rounded-sm shadow-md bg-white">
            <ImageUploader previewImage={previewImage} />
        </div>

        {/* Social Links */}
        <div className="md:w-[40%] w-[90%] h-auto max-h-[700px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
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
                <button
                    onClick={()=> updateHomeFacebook(facebook)}
                    className="text-xs border px-3 py-1 my-2 rounded-sm active:scale-95 duration-100 cursor-pointer"
                >Update</button>
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
                <button
                    onClick={()=> updateHomeLinkedin(linkedin)}
                    className="text-xs border px-3 py-1 my-2 rounded-sm active:scale-95 duration-100 cursor-pointer"
                >Update</button>
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
                <button
                    onClick={()=> updateHomeWhatsapp(whatsapp)}
                    className="text-xs border px-3 py-1 my-2 rounded-sm active:scale-95 duration-100 cursor-pointer"
                >Update</button>
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
                <button
                    onClick={()=> updateHomeEmail(email)}
                    className="text-xs border px-3 py-1 my-2 rounded-sm active:scale-95 duration-100 cursor-pointer"
                >Update</button>
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
                <button
                    onClick={()=> updateHomeContact(contact)}
                    className="text-xs border px-3 py-1 my-2 rounded-sm active:scale-95 duration-100 cursor-pointer"
                >Update</button>
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
                <button
                    onClick={()=>updateHomeSkillsHeader(skillsHeader)} 
                    className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
            </div>

            <div className="p-2 w-full">
            <h3>About:</h3>
                <textarea
                    value={skillsAbout}
                    onChange={(e) => setSkillsAbout(e.target.value)}
                    placeholder="Short Description"
                    className="w-full min-h-[100px] max-h-[250px] p-2 rounded-sm border border-[#00111d] mt-2"
                />
                <button
                    onClick={()=>updateHomeSkillsDescription(skillsAbout)} 
                    className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
            </div>

            {/* Skill */}
            <div className="p-2 w-full rounded-md border">
                <h3 className="text-sm border-b mb-1 pb-1">Skill Section 1</h3>
                
                <input
                    type="text"
                    value={skill1Heading}
                    onChange={(e) => setSkill1Heading(e.target.value)}
                    placeholder="Skill heading 1"
                    className="w-full h-auto p-2 rounded-sm border border-[#00111d] mt-2"
                />
                <button
                    onClick={()=>updateSkillHeadingWithNumber(skill1Heading,1)} 
                    className="text-[#323232] w-full h-full p-1 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
                
                <SkillImageUploader
                    skillImage={skill1Image}
                    skillNumber={1}
                    width={300}
                    height={300}
                />
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
                <button
                    onClick={()=>updateHomeVideoSectionHeader(videoHeader)} 
                    className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
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
                <button
                    onClick={()=>updateHomeLastSection(lastHeader)} 
                    className="text-[#323232] w-full h-full p-2 border rounded-lg mt-2 active:scale-95 cursor-pointer duration-100"
                >Update</button>
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
                </div>
            </div>

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>Second information:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
                </div>
            </div>

            <div className="w-full md:w-[40%] h-auto max-h-[550px] flex flex-col items-start justify-start p-2 rounded-sm shadow-md text-[#00111d] bg-white">
                <div className="w-full">
                    <h2>Therd information:</h2>
                    <textarea
                        placeholder="About Section description"
                        className="w-full max-h-[300px] min-h-[100px] p-2 rounded-sm border border-[#00111d] outline-none text-[#00111d] mt-2"
                    />
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
