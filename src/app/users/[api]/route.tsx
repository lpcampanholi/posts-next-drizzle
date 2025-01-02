import { createUser, getAllUsers } from "@/api/services/users-services";

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
