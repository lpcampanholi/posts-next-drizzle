export default function Titulo({ children }: { children: string }) {
    return (
        <h1 className="text-3xl my-4">{children}</h1>
    );
}
