import { mysqlTable, int, serial, text, varchar } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { relations } from "drizzle-orm";

export const posts = mysqlTable("posts", {
    id: serial().primaryKey(),
    title: varchar({ length: 255 }).notNull(),
    content: text().notNull(),
    authorId: int("user_id").notNull(),
})

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.authorId],
        references: [users.id]
    }),
}));
