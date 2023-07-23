import { Shell } from "@/components/shells/shell";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Shell as="article" variant="markdown">
      <div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div>
            <Skeleton className="h-10 w-10" />
          </div>
        </div>
        <h1 className="mt-2 inline-block text-4xl font-bold leading-tight lg:text-5xl">
          <Skeleton className="h-10 w-10" />
        </h1>
      </div>
      {/* // <Image
        //   src={post.image}
        //   alt={post.title}
        //   width={720}
        //   height={405}
        //   className="my-8 rounded-md border bg-muted transition-colors"
        //   priority
        // /> */}
      <div>
        <Skeleton />
      </div>
      <div className="flex justify-center py-5">
        <Skeleton className="h-10 w-10" />
      </div>
    </Shell>
  );
}
