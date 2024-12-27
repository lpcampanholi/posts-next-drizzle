import { mysqlTable, int, serial, text } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const posts = mysqlTable("posts", {
    id: serial().primaryKey(),
    content: text().notNull(),
    authorId: int("user_id").notNull(),
})

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.authorId],
        references: [users.id]
    }),
}));