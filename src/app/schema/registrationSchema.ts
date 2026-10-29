import { z } from "zod";

export const registrationSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, "Enter at least 2 characters."),
    
    email: z
        .string()
        .trim()
        .email("Enter a valid email address."),
    
    userName: z
        .string()
        .trim()
        .min(3, "Username must be at least 3 characters."),

    passWord: z
        .string()
        .min(8, "Password must be at least 8 characters."),
});

export type RegistrationForm = z.infer<typeof registrationSchema>;
