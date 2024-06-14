import "./navMenuItem.css"
import Link from "next/link";

export default function NavMenuItem({ href, children, className }) {
    return (
        <li className={className}>
            <Link href={href}>{children}</Link>
        </li>
    );
}