import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  imageUrl: varchar("imageUrl").notNull(),
  email: varchar("email").notNull().unique(),
  Subscript: boolean("subscription").default(false),
});
