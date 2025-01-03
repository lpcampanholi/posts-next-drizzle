import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function UserSearch() {
    return (
        <form className="flex items-center gap-2">
            <Input name="id" placeholder="User ID" className="w-auto" ></Input>
            <Input name="name" placeholder="User Name" className="w-auto" ></Input>
            <Button type="submit" variant="link">
                <Search />
                Filtrar Resultados
            </Button>
        </form>
    );
}