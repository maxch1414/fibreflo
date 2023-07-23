import { type InferModel } from "drizzle-orm";
import {
  boolean,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const emailPreferences = mysqlTable("email_preferences", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 191 }).notNull(),
  token: varchar("token", { length: 191 }).notNull(),
  newsletter: boolean("newsletter").notNull().default(false),
  marketing: boolean("marketing").notNull().default(false),
  transactional: boolean("transactional").notNull().default(false),
  createdAt: timestamp("createdAt").defaultNow(),
});

export type EmailPreference = InferModel<typeof emailPreferences>;

export const posts = mysqlTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 191 }).notNull(),
  content: varchar("content", { length: 764 }).notNull(),
  image: varchar("image", { length: 191 }).notNull(),
  published: boolean("published").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  slug: varchar("slug", { length: 191 }).notNull(),
});

export type Post = InferModel<typeof posts>;
