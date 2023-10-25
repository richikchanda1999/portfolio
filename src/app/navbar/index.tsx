import Link from "next/link";

export default function Navbar() {
    return <div className="flex w-[calc(100vw - 32px)] h-navbar-height items-center gap-8 px-16 m-8 text-secondary bg-primary font-bold text-lg border-secondary border-t-8 border-b-4">
        <Link href="/">HOME</Link>
        {/* <Link href="/projects">PROJECTS</Link>
        <Link href="/work">WORK</Link>
        <Link href="/contact">CONTACT</Link> */}
    </div>
}