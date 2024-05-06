import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationsEmail";
import { ApiResponse } from "@/types/ApiResponse";

//note backend likhe bela think as you are the server

export async function sendVerificationEmail( email: string, username: string, verifyCode: string,) : Promise<ApiResponse>{
    try {

        // e mai react mail se outhail batu ,ye part resend manse fe outhaisektu
        await resend.emails.send({
            from: 'onboarding@resend.dev', //e part mai resend se nannu free se karbo ta ekin se karbo jab domain kinlebo ta apn kinal ola use kare banat
            to: email,
            subject: 'Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
          });

        return  {success: true, message: " verification email sended sucessFully"}
    } catch (emailError) {
        console.error("Error sending verification email")
        return  {success: false, message: "failed to send verification email "}
    }  
} 