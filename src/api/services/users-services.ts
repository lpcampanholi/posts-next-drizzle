import db from "../db/connection";
import { users } from "../db/schema/users";

export async function getAllUsers() {
    const allUsers = await db.select().from(users);
    return allUsers;
}
