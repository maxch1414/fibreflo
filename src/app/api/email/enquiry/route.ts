import { env } from "@/env.mjs";
import { type ErrorResponse } from "resend";
import { z } from "zod";
import { resend } from "@/lib/resend";
import EnquiryEmail from "@/components/emails/enquiry";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(req: Request) {
  const input = contactSchema.parse(await req.json());
  if (!env.EMAIL_FROM_ADDRESS) return null;

  try {
    await resend.emails.send({
      from: env.SUPPORT_EMAIL_ADDRESS,
      to: env.EMAIL_FROM_ADDRESS,
      reply_to: input.email,
      subject: `Enquiry from ${input.firstName} ${input.lastName}`,
      react: EnquiryEmail({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phoneNumber: input.phoneNumber,
        addressLine1: input.addressLine1,
        cityOrTown: input.cityOrTown,
        postcode: input.postcode,
        enquiry: input.enquiry,
      }),
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    const resendError = error as ErrorResponse;

    if (resendError?.error?.message) {
      return new Response(resendError.error.message, { status: 429 });
    }

    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
