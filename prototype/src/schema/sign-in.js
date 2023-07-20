import { z } from "zod";
export const SignInSchema = z.object({
    firstname: z.string().nonempty("First name is required"),
    lastname: z.string().nonempty("Last name is required"),
    email: z
        .string()
        .nonempty("Last name is required")
        .email("Email formate must be valid"),
    password: z.string().nonempty("Password is required"),
    confirmPassword: z
        .string()
        .nonempty("Please confirm your password")
        .refine(( data) => data.confirmPassword === data.password, {
            message: "Password does not match",
            path: ["confirmPassword"],
        }),
});
