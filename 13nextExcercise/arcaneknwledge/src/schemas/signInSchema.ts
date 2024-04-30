//4th step
import {z} from 'zod';

export const signInSchema = z.object({
    //ya username likho ya email likho farak nai parat mai yaha identifier use karatu
    // kaheki identifier mor used word ho in tech field
    idetifier: z.string(),
    password: z.string(),
})