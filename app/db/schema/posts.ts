import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey(),
  subject: text("title").notNull(),
  content: text("content"),
  summary: text("summary"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
