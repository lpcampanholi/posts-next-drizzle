import { createUser, deleteUser, getAllUsers, updateUser } from "@/api/services/usersServices";

export async function GET() {
    const allUsers = await getAllUsers();
    return Response.json(allUsers);
}

export async function POST(request: Request) {
    const newUser = await request.json();
    await createUser(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    });
}

export async function PUT(request: Request) {
    const user: User = await request.json();
    await updateUser(user);
    return new Response("Atualizado com sucesso!", {
        status: 200
    })
}

export async function DELETE(request: Request) {
    const id: number = await request.json();
    await deleteUser(id);
}

