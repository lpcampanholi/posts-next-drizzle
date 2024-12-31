"use client";

import { useState } from "react";
import Titulo from "../Titulo";

export default function UserForm() {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    return (
        <>
            <Titulo>Create new User</Titulo>
            <form>
                <div className="flex flex-col gap-4 w-[50%]">
                    <input
                        className="p-2 bg-neutral-900"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                    <input
                        className="p-2 bg-neutral-900"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                    />
                </div>
                <button className="bg-sky-800 px-4 py-2 my-4 hover:bg-sky-700 rounded-lg">Send</button>
            </form>
        </>
    );
}
