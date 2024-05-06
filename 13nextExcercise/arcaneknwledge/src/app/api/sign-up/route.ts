import dbConnect from "@/lib/dbConnect";  //e ola dbConnect har ek route me lagat lagat lagat
import UserModel from "@/model/User";
import bcrypt from 'bcryptjs'
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

//yeady ehe mai express me kartu ta routes bataik parat for eg.
// /api/signUp/.. jaisin url mano yaha e apihi define kardehat. 
// i.e /api/sign-up/

export async function POST(request: Request ) {
    await dbConnect()
 
    try {
        const {username, email, passowrd} = await request.json()

        const existingUserVerifiedByName = await UserModel.findOne({ username,isVerified: true,})

        if(existingUserVerifiedByName) {
            return Response.json({
                success: false,
                message: "Already username taken"
            },{
                status: 400,
            })
        }

        const existingUserVerifiedByEmail = await UserModel.findOne({email,})


        if(existingUserVerifiedByEmail) {
            // return Response.json({
            //     sucess: false,
            //     message: "Already Email taken",
            // },{
            //     status: 400,
            // })
        }else {
            const hashPassword = await bcrypt.hash(passowrd,10)

            // athe par e new ola keyword expiryDate me object reference karataa 
            // so expiryDate me ek time set karnu by expiryDate.setHours() tab
            // ouhai set karal ola manse getHours kar k add 1 kardenu   
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            new UserModel({
                // userName,
                // email,
                // password: hasedPassword,
                // verifyCode: string,
                // verifyCodeExpiry: Date,
                // isVerified: boolean,
                // isAcceptingMessage: boolean,
                // messages: Message [],
            })
        }
    } catch (error) {
        //e ola part chahi console me dekhai di 
        console.error("Error from POST method ie: not able to register user",error)
        //ani e ola error part chahi frontEnd me dekhai di
        return Response.json({
            sucess: false,
            message: "failed to register user ie: Error from Post method"
        },{
            status: 500,
        })
    }
}