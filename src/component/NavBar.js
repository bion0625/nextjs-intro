import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation'

export default function NavBar(){
    const pathname = usePathname();
    return(
        <nav>
            <Link style={{color:pathname === "/" ? "red":"blue"}} href="/">Home</Link>
            <Link style={{color:pathname === "/about" ? "red":"blue"}} href="/about">About</Link>
        </nav>
    );
}