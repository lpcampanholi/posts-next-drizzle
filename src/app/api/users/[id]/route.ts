import { deleteUser, getOneUser, updateUser } from "@/db/services/users-services";
import { request } from "http";

export async function GET(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const idNumber = Number(id);
    const user = await getOneUser(idNumber);
    return Response.json(user);
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const idNumber = Number(id);
    const user: UserDTO = await request.json();
    await updateUser(idNumber, user);
    return new Response("User updated");
}

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const idNumber = Number(id);
    await deleteUser(idNumber);
    return new Response("User deleted");
}