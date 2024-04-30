//6th step
import {z} from 'zod';

export const messageSchema = z.object({
    content : z.string()
    .min(10,{message : "minimum character must be 10 character"})
    .max(300,{message : "only 300 characters are accepted in message"})
})