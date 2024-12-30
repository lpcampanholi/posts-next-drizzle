import { deleteUser } from "@/api/services/users-services";

export async function DELETE(
    _request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const idNumber = parseInt(id);
    await deleteUser(idNumber);
    return new Response("Usuário excluído");
}
