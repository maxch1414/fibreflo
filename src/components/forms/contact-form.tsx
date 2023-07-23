"use client";

import { useTransition } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/lib/validations/contact";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Icons } from "@/components/Icons";

type Inputs = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();

  function onSubmit(data: Inputs) {
    console.log(data);

    startTransition(async () => {
      const response = await fetch("/api/email/enquiry", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.status === 422) {
        toast.error("Inavlid input.");
      }

      if (response.status === 429) {
        toast.error("The daily email limit has been reached.");
      }

      if (response.status === 500) {
        toast.error("Something went wrong. Please try again later.");
      }

      if (response.ok) {
        toast.success("Enquiry successfully sent!");
        form.reset();
      }
    });
  }
  const form = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
  });
  return (
    <Form {...form}>
      <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
        <div className="py-5 grid grid-cols-2 gap-x-10 gap-y-5">
          <FormField
            {...form.register("firstName")}
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Fibre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("lastName")}
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Flo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("email")}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="enquiries@fibreflo.co.uk" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("phoneNumber")}
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telephone Number</FormLabel>
                <FormControl>
                  <Input placeholder="07871 300214" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("addressLine1")}
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input placeholder="10 Downing Street" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("cityOrTown")}
            control={form.control}
            name="cityOrTown"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City/Town</FormLabel>
                <FormControl>
                  <Input placeholder="London" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("postcode")}
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="SW1A 2AA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            {...form.register("enquiry")}
            control={form.control}
            name="enquiry"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Enquiry</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I just wanted to let you know, you are the best fibre company ever!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isPending}>
          {isPending ?? (
            <Icons.spinner
              className="h-3 w-3 animate-spin"
              aria-hidden="true"
            />
          )}
          Submit Enquiry
        </Button>
      </form>
    </Form>
  );
}
