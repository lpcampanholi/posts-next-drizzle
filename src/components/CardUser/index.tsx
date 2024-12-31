interface CardUserProps {
    user: User;
    onDelete: (id: number) => Promise<void>
}

export default function CardUser({ user, onDelete }: CardUserProps) {
    return (
        <div className="flex items-center justify-between border-b border-neutral-700 p-2 w-[60%] ">
            <div className="flex gap-4">
                <p className="text-strong font-bold">{user.name}</p>
                <p>{user.email}</p>
            </div>
            <div className="flex gap-4">
                <button className="bg-yellow-600 border-yellow-900 border-[1px] px-1 rounded-sm">Editar</button>
                <button
                    className="bg-red-900 border-red-950 border-[1px] px-1 rounded-sm"
                    onClick={() => onDelete(user.id)}
                >Excluir
                </button>
            </div>
        </div>
    );
}


// border-solid border border-sky-700 rounded-xl