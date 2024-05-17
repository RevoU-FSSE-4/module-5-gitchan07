import Link from "next/link"

export default function Header() {
    return (
        <header>
            <Link href="/">
                <img src="/logo/nike.svg" alt="nike logo" width={50} />
            </Link>
            <Link href="about">About</Link>
            <Link href="contact-us">Contact Us</Link>
            <Link href="login">Login</Link>
        </header>
    )
}