import { getNews } from "@/app/_actions/news";
import { Icons } from "@/components/Icons";
import { Shell } from "@/components/shells/shell";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate, readingTime } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getNews(params.slug);
  if (!post) {
    return notFound();
  }
  return (
    <Shell as="article" variant="markdown">
      <Link
        href="/news"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div>
            Published on {formatDate(post.createdAt)}
            {readingTime(post.content)}
          </div>
        </div>
        <h1 className="mt-2 inline-block text-4xl font-bold leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        // <Image
        //   src={post.image}
        //   alt={post.title}
        //   width={720}
        //   height={405}
        //   className="my-8 rounded-md border bg-muted transition-colors"
        //   priority
        // />
        <div>{post.image}</div>
      )}
      <div className="flex justify-center py-5">
        <Link href="/news" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          See all posts
          <span className="sr-only">See all posts</span>
        </Link>
      </div>
    </Shell>
  );
}
