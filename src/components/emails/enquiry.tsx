import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { Icons } from "../Icons";

interface EnquiryEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  cityOrTown: string;
  postcode: string;
  enquiry: string;
}

export default function EnquiryEmail({
  firstName,
  lastName,
  email,
  phoneNumber,
  addressLine1,
  cityOrTown,
  postcode,
  enquiry,
}: EnquiryEmailProps) {
  const previewText = `Enquiry From ${firstName} ${lastName}`;

  return (
    <Html>
      <Head>
        <title>
          Enquiry from {firstName} {lastName}
        </title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto bg-zinc-50 font-sans">
          <Container className="mx-auto my-[40px] max-w-2xl rounded p-4">
            <Section className="mt-4">
              <Heading className="text-center text-2xl font-semibold text-zinc-950">
                Customer Enquiry
              </Heading>
              <Hr className="my-4" />
              <Section>
                Customer Details:
                <Text>Email: {email}</Text>
                <Text>Phone Number: {phoneNumber}</Text>
                <Text>Address Line 1: {addressLine1}</Text>
                <Text>City/Town: {cityOrTown}</Text>
                <Text>Postcode: {postcode}</Text>
              </Section>
            </Section>
            <Section className="mt-6">Enquiry: {enquiry}</Section>
            <Section className="mt-4 text-center text-zinc-400">
              <Text className="my-4"></Text>
              <Text className="mb-0 mt-4">
                <Icons.copyright className="inline-block mr-1 h-3 w-3" />
                {new Date().getFullYear()} Fibre Flo. All rights reserved
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
