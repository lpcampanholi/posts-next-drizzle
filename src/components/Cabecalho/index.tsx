import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="bg-neutral-800 p-4">
      <nav>
        <ul className="flex gap-6 text-lg">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/users" className="hover:underline">Users</Link></li>
          <li><Link href="/posts" className="hover:underline">Posts</Link></li>
        </ul>
      </nav>
    </header>
  )
}
