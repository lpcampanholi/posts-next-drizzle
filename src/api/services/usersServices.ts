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

export async function updateUser({ id, name, email }: User) {
    await db.update(users).set({ name, email }).where(eq(users.id, id));
}

export async function deleteUser(id: number): Promise<void> {
    await db.delete(users).where(eq(users.id, id));
}
