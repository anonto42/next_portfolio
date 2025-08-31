"use server";

import dbConnect from "@/db/dbConnection";
import { OverAllData, TOverAllData } from "@/db/models/overmodel";
await dbConnect();

export const updateHomeFirstHeading = async ( heading: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.homeFirstHeader = heading;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeSecondHeading = async ( heading: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.homeSecondHeader = heading;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeDescription = async ( description: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.homeHeadingDescription = description;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeFacebook= async ( link: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.facebook = link;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeWhatsapp = async ( link: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.whatsapp = link;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeLinkedin = async ( link: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.linkedin = link;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeEmail = async ( link: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.email = link;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeContact = async ( link: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.contact = link;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeSkillsHeader = async ( text: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.skillsHeader = text;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeSkillsDescription = async ( description: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.skillDescription = description;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeYearsOfExperiyances = async ( amount: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.yearsOfExpriyeans = amount;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeComplitedProjects = async ( amount: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.projects = amount;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateHomeSectionImage = async ( url: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.homeHeadingImage = url;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateSkillHeadingWithNumber = async ( payload: string, number: 1 | 2 | 3 | 4 ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }
        console.log("Comes hear")

        switch( number ){
            case 1:
                resuald.skill1.title = payload;
                console.log("action on hear")
                break;
            case 2:
                resuald.skill2.title = payload;
                break;
            case 3:
                resuald.skill3.title = payload;
                break;
            case 4:
                resuald.skill4.title = payload;
                break;
        }

        await resuald.save()
        console.log("saved hear")
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}

export const updateSkillImage = async ( payload: string, number: 1 | 2 | 3 | 4 ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        switch( number ){
            case 1:
                resuald.skill1.image = payload;
                break;
            case 2:
                resuald.skill2.image = payload;
                break;
            case 3:
                resuald.skill3.image = payload;
                break;
            case 4:
                resuald.skill4.image = payload;
                break;
        }

        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}


export const updateHomeVideoSectionHeader = async ( title: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.videoSection.title = title;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}
//Have to create the video uploader

export const updateHomeLastSection = async ( title: string ) => {
    try {

        const resuald:TOverAllData | null = await OverAllData.findOne({});
        
        if (!resuald) {
            await OverAllData.create({});
            return "Document created on the database"
        }

        resuald.lastSection.header = title;
        await resuald.save()
        
    } catch (error: any) {
        console.log(error)
        return error.message
    }
}
// Have to work for the points array