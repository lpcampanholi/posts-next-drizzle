import { eq } from "drizzle-orm";
import db from "../db/connection";
import { users } from "../db/schema/users";

export async function getAllUsers(): Promise<User[]> {
    const allUsers = await db.select().from(users);
    return allUsers;
}

export async function createUser({ name, email }: UserDTO) {
    await db.insert(users).values({ name, email });
}

export async function deleteUser(id: number): Promise<void> {
    await db.delete(users).where(eq(users.id, id));
}
