import { Post } from "@/db/schema";
import { getAllNews } from "../_actions/news";
import { NewsCard } from "@/components/NewsCard";
import { Skeleton } from "@/components/ui/skeleton";

export default async function News() {
  return (
    <div className="p-10">
      <h1>News</h1>
      <div className="grid grid-cols-1 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10">
        <Skeleton />
      </div>
    </div>
  );
}
