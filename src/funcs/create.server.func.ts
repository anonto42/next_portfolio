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

//Have to impliment the 4 skills sections

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