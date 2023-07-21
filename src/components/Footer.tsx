import Link from "next/link";

import { siteConfig } from "@/config/site";
import { SubscribeToNewsletterForm } from "@/components/forms/subscribe-to-newsletter-form";
import { Icons } from "@/components/Icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Shell } from "@/components/shells/shell";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell as="div">
        <section
          id="footer-content"
          aria-labelledby="footer-content-heading"
          className="flex flex-col gap-10 lg:flex-row lg:gap-20"
        >
          <section
            id="footer-branding"
            aria-labelledby="footer-branding-heading"
          >
            <Link
              aria-label="Home"
              href="/"
              className="flex items-center space-x-2"
            >
              <Icons.logo className="h-6 w-6" aria-hidden="true" />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
          </section>
          <section
            id="footer-links"
            aria-labelledby="footer-links-heading"
            className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-4"
          >
            {siteConfig.footerNav.map((item) => (
              <div key={item.title} className="space-y-3">
                <h4 className="text-base font-medium p-4">{item.title}</h4>
                <ul className="space-y-3">
                  {item.items.map((link) => (
                    <li key={link.title}>
                      <Link
                        className={buttonVariants({ variant: "link" })}
                        href={link.href}
                        target={link?.external ? "_blank" : undefined}
                        rel={link?.external ? "noreferrer" : undefined}
                      >
                        {link.title}
                        <span className="sr-only">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section
            id="newsletter"
            aria-labelledby="newsletter-heading"
            className="space-y-3"
          >
            <h4 className="text-base font-medium">
              Subscribe to our newsletter
            </h4>
            <SubscribeToNewsletterForm />
          </section>
        </section>
        <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="flex items-center space-x-4"
        >
          <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
            <Icons.copyright className="inline-block mr-1 h-3 w-3" />
            {new Date().getFullYear()} Fibre Flo. All rights reserved
          </div>
          <div className="flex items-center space-x-1">
            <ThemeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  );
}
