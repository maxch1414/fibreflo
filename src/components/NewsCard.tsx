"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { type Post } from "@/db/schema";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/Icons";
import { format } from "date-fns";

interface NewsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: Post;
  variant?: "default" | "switchable";
}

export function NewsCard({
  post,
  variant = "default",
  className,
  ...props
}: NewsCardProps) {
  return (
    <Card
      className={cn(
        "h-full overflow-hidden rounded-sm hover:scale-105 transition",
        className
      )}
      {...props}
    >
      <Link
        aria-label={`View ${post.title} details`}
        href={`/news/${post.slug}`}
      >
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {post?.image ?? (
              //   <Image
              //     src={post.image}
              //     alt={post.title}
              //     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              //     fill
              //     className="object-cover"
              //     loading="lazy"
              //   />
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center bg-secondary"
              >
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link
        aria-label={`View ${post.title} details`}
        href={`/product/${post.slug}`}
      >
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle className="line-clamp-1">{post.title}</CardTitle>
          {/* <CardDescription className="line-clamp-2">
            {formatPrice(product.price)}
          </CardDescription> */}
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
          {format(new Date(post.createdAt), "dd MMMM yyyy")}
        </div>
      </CardFooter>
    </Card>
  );
}
