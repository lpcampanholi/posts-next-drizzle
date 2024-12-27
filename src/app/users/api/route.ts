import { getAllUsers } from "@/api/services/users-services";

export async function GET() {
    const users = await getAllUsers();
    return Response.json(users);
}
