import { relations } from 'drizzle-orm';
import { int, mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';
import { posts } from './posts';

export const users = mysqlTable('users', {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));