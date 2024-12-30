interface CardUserProps {
    user: User;
    onDelete: (id: number) => Promise<void>
}

export default function CardUser({ user, onDelete }: CardUserProps) {
    return (
        <div className=" bg-neutral-900 flex items-center justify-between my-2 p-2 w-[50%] border-solid border border-sky-500 rounded-xl">
            <div>
                <h2 className="text-xl">{user.name}</h2>
                <p>{user.email}</p>
            </div>
            <div className="flex gap-4">
                <button className="hover:underline">Editar</button>
                <button
                    className="hover:underline"
                    onClick={() => onDelete(user.id)}
                >Excluir
                </button>
            </div>
        </div>
    );
}
