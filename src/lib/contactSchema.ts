import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .nonempty("Name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters long")
    .nonempty("Phone number is required"),
  email: z
    .string()
    .min(5, "Email must be at least 5 characters long")
    .nonempty("Email is required")
    .email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .nonempty("Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export { type ContactFormData, contactSchema };
