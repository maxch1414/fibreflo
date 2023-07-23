"use server";

import { db } from "@/db";
import { Post, posts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getAllNews() {
  const allPosts: Post[] = await db.select().from(posts);
  return allPosts;
}

export async function getNews(slug: string) {
  const allPosts: Post[] = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug));
  return allPosts[0];
}

export async function postNews() {
  //   const post = await db.insert;
}
