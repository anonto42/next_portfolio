import { Document, Schema, model, models } from "mongoose";


export interface TOverAllData extends Document {
    homeFirstHeader:string,
    homeSecondHeader:string,
    homeHeadingDescription:string
    homeHeadingImage:string,
    yearsOfExpriyeans:string,
    projects: string,
    facebook:string,
    linkedin:string
    whatsapp:string,
    contact:string,
    email:string,
    aboutImageUrl:string,
    skillsHeader:string,
    skillDescription:string,
    skill1:{
        title:string,
        image:string
    },
    skill2:{
        title:string
        image:string
    },
    skill3:{
        title:string,
        image:string
    },
    skill4:{
        title:string,
        image:string
    },
    videoSection:{
        title:string,
        videoUrl:string
    },
    lastSection:{
        header:string,
        points:string[]
    },
    aboutPage:{
        aboutSection:string,
        firstInfo:{
            description:string,
            image:string
        },
        secondInfo:{
            description:string,
            image:string
        },
        thirdInfo:{
            description:string,
            image:string
        }
    },
    contactPage:{
        firstInfo:{
            description:string,
            image:string
        },
        location:string
    }
  } 


const overDataSchema = new Schema<TOverAllData>(
  {
    homeFirstHeader:{
        type: String,
        default: ""
    },
    projects:{
        type: String,
        default: ""
    },
    homeSecondHeader:{
        type: String,
        default: ""
    },
    homeHeadingDescription:{
        type: String,
        default: ""
    },
    homeHeadingImage:{
        type: String,
        default: ""
    },
    yearsOfExpriyeans:{
        type: String,
        default: "2"
    },
    facebook:{
        type: String,
        default: ""
    },
    linkedin:{
        type: String,
        default: ""
    },
    whatsapp:{
        type: String,
        default: ""
    },
    contact:{
        type: String,
        default: ""
    },
    email:{
        type: String,
        default: ""
    },
    aboutImageUrl:{
        type: String,
        default: ""
    },
    skillsHeader:{
        type: String,
        default: ""
    },
    skillDescription:{
        type: String,
        default: ""
    },
    skill1:{
        title:{
            type: String,
            default: ""
        },
        image:{
            type: String,
            default: ""
        }
    },
    skill2:{
        title:{
            type: String,
            default: ""
        },
        image:{
            type: String,
            default: ""
        }
    },
    skill3:{
        title:{
            type: String,
            default: ""
        },
        image:{
            type: String,
            default: ""
        }
    },
    skill4:{
        title:{
            type: String,
            default: ""
        },
        image:{
            type: String,
            default: ""
        }
    },
    videoSection:{
        title:{
            type: String,
            default: ""
        },
        videoUrl:{
            type: String,
            default: ""
        }
    },
    lastSection:{
        header:{
            type: String,
            default: ""
        },
        points: {
            type: [String],
            default:[]
        }
    },
    aboutPage:{
        aboutSection:{
            type: String,
            default: ""
        },
        firstInfo:{
            description:{
                type: String,
                default: ""
            },
            image:{
                type: String,
                default: ""
            }
        },
        secondInfo:{
            description:{
                type: String,
                default: ""
            },
            image:{
                type: String,
                default: ""
            }
        },
        thirdInfo:{
            description:{
                type: String,
                default: ""
            },
            image:{
                type: String,
                default: ""
            }
        }
    },
    contactPage:{
        firstInfo:{
            description:{
                type: String,
                default: ""
            },
            image:{
                type: String,
                default: ""
            }
        },
        location:{
            type: String,
            default: ""
        }
    }
  }
);

export const OverAllData = models.OverAllData || model<TOverAllData>("OverAllData", overDataSchema);