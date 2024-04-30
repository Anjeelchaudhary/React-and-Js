import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content: string;  //typeScript me string k s small rahat
    createdAt: Date;
}

const messageSchema : Schema<Message> = new Schema({
    content: {
        type:String, //mongoose k String me S capital rahat
        required: true,
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now,
    }
})

export interface User extends Document {
    userName: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    isAcceptingMessage: boolean,
    messages: Message [],
}

const userSchema : Schema<User> = new Schema({
    userName: {
        type: String,
        required: [true,"UserName ta rakho bhai"],
        trim: true,  //in case dheur space rakhdihi to nau me
        unique: true,
    },
    email: {
        type: String,
        required: [true,"email ta rakho bhai"],
        unique: true,
        match: [/.+\@.+\../,"Email should be unique hai"],

    },
    password: {
        type: String,
        required: [true,"password ta rakho bhai"],
    },
    verifyCode: {
        type: String,
        required: [true,"VerifyCode ta rakho ne beta"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true," verify CodeExpiry ta rakho bhai"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [messageSchema],
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User",userSchema))
// const UserModel = mongoose.model("User",userSchema) aisik node me karli

export default UserModel;