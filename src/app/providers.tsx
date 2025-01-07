"use client";

import { PropsWithChildren } from "react";
import UsersProvider from "./contexts/user-context";

export default function Providers({ children }: PropsWithChildren) {
    return (
        <UsersProvider>
            {children}
        </UsersProvider>
    )
}