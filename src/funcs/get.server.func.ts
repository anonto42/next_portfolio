"use server";

import dbConnect from "@/db/dbConnection";
import { OverAllData, TOverAllData } from "@/db/models/overmodel";
await dbConnect();

export const getHomePageData = async () => {
    try {

        const resuald = await OverAllData.findOne({}) as TOverAllData;
        
        return {
            HeroSection: {
                firstHeader: resuald.homeFirstHeader,
                secondHeader: resuald.homeSecondHeader,
                discription: resuald.homeHeadingDescription,
                developerImage: resuald.homeHeadingImage,
                expriyeans : resuald.yearsOfExpriyeans,                
                projects: resuald.projects,
                image: resuald.homeHeadingImage
            },
            links:{
                facebook: resuald.facebook,
                linkedin: resuald.linkedin,
                whatsapp: resuald.whatsapp,
                email: resuald.email,
                contact: resuald.contact
            },
            videoSection:{
                title: resuald.videoSection.title,
                url: resuald.videoSection.videoUrl
            },
            skills:{
                title: resuald.skillsHeader,
                description: resuald.skillDescription,
                div1: resuald.skill1,
                div2: resuald.skill2,
                div3: resuald.skill3,
                div4: resuald.skill4
            },
            lastSection:{
                title: resuald.lastSection.header,
                pointes: resuald.lastSection.points
            }
            // about:{
            //     description: resuald.aboutPage.aboutSection,
            //     section1: resuald.aboutPage.firstInfo,
            //     section2: resuald.aboutPage.secondInfo,
            //     section3: resuald.aboutPage.thirdInfo
            // }
        }
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const getHomeAboutData = async () => {
    try {

        const resuald = await OverAllData.findOne({}) as TOverAllData;
        
        return {
            HeroSection: {
                firstHeader: resuald.homeFirstHeader,
                secondHeader: resuald.homeSecondHeader,
                discription: resuald.homeHeadingDescription,
                developerImage: resuald.homeHeadingImage,
            },
            links:{
                facebook: resuald.facebook,
                linkedin: resuald.linkedin,
                whatsapp: resuald.whatsapp,
                email: resuald.email,
                contact: resuald.contact
            },
            imageData:{
                projects: resuald.projects,
                experience : resuald.yearsOfExpriyeans,
                image: resuald.homeHeadingImage
            }
        }
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}
