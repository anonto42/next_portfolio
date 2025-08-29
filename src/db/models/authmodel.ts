import { Schema,models,model } from "mongoose";

interface IAuth{
    email: string;
    password: string;
}

const authSchema = new Schema<IAuth>({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

export const Auth = models.OverAllData || model<IAuth>("auth", authSchema);