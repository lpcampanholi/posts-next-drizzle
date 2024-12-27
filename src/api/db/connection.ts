import { drizzle } from "drizzle-orm/mysql2";
import "dotenv/config";

const db = drizzle(<string>process.env.DATABASE_URL);

export default db;
