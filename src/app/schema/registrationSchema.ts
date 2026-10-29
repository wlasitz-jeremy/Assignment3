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

    dateOfBirth: z
        .date()
        .nullable()
        .refine((date) => date !== null, "Please select your date of birth.",)
        .refine((date) => {
            if (date === null) return true;
                const today = new Date();
                const eighteenthBirthdayCutoff = new Date(
                    today.getFullYear() - 18,
                    today.getMonth(),
                    today.getDate(),
                ); 
            return date <= eighteenthBirthdayCutoff;
        }, "You must be at least 18 years old.",),
});

export type RegistrationFormInput = z.input<typeof registrationSchema>;
export type RegistrationForm = z.output<typeof registrationSchema>;
