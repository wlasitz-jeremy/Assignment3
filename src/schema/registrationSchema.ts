import { z } from "zod";
/* 
Registration Scheme provides the user with registrations restrictions. If user do not meet required for select fields, a message with return to the user on what they are missing.

-First Name much contain a length of at least 2 Characters.
-Last Name much contain a length of at least 2 Characters.
-Email much be a valid email addrress.
-Phone Number must be entered in a valid format and must contain exactly 10 digits
-Usename much contain a length of at least 3 Characters.
-Date of birth must be a valid and user must be over the age of 18 to register on the application. If user is not of age, user will be -unable to create an account and will be given message that they are required to be over the age of 18.

*/
export const registrationSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, "Enter at least 2 characters."),

    lastName: z
        .string()
        .trim()
        .min(2, "Enter at least 2 characters."),
    
    email: z
        .string()
        .trim()
        .email("Enter a valid email address."),

    phoneNumber: z
        .string()
        .max(14, "Maximuim 14 characters allowed.")
        .refine((val) => val.replace(/\D/g, "").length >= 10, "Must have atleast 10 digits."),
    
    userName: z
        .string()
        .trim()
        .min(3, "Username must be at least 3 characters."),

    passWord: z
        .string()
        .min(8, "Password must be at least 8 characters.")
        .regex(/[A-Z]/g, "Password mustr contain atleast one uppercase letter.")
        .regex(/\D/g, "Password must contain atleast one number.")
        .regex(/[!@#$%^&*]/, "Password must contain atleast one special charater."),

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
