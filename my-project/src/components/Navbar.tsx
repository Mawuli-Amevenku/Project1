import { buttonVariants } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-blue-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between">
                <Link href="/">University of Ghana</Link>
                <Link className={buttonVariants()}  href="/sign-in">Sign in</Link>
            </div>
        </div>
    )
};

export default Navbar;