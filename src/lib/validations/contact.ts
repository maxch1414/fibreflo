import * as z from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const contactSchema = z.object({
  firstName: z.string().min(1).max(191),
  lastName: z.string().min(1).max(191),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number."),
  addressLine1: z.string().min(1).max(191),
  cityOrTown: z.string().min(1).max(191),
  postcode: z.string().max(8),
  enquiry: z.string().min(64),
});
