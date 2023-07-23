import { ContactForm } from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="font-bold text-4xl">Contact Us</h1>
      <p>Contact us with any enquiries you may have.</p>
      <ContactForm />
    </div>
  );
}
