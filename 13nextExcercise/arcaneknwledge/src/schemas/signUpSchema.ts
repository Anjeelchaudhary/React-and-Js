//2nd step
import {z} from 'zod';

//validation with zod 

//e ola step mai sidda signUpSchema me fe kare sektu mano aisik fe kare banat
//athe par mikin username kil check karna raha tabe sidda z.string() karnu
export const usernameValidation = z.string() 
        .max(15,"user name should be no more than 15 character")
        .min(2,"user name should be minimum of 2 character ")
        .regex(/^[a-zA-Z0-9_]+$/,"user name must not contain special charater ")

//athe par mikin 2-4 tho chaj eksange check karna ba tabe object karnu
export const signUpScehma = z.object({
    username : usernameValidation,
    email : z.string().email({message : "Valid email is required "}),
    password : z.string().min(6,{message : "password must be atleast 6 charater "}),
})