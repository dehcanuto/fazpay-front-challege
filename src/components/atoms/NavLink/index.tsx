import Link from "next/link"
import { NavLinkPropsType } from "./types";

const NavLink = ({ url, label }: NavLinkPropsType) => {
    return (
        <Link href={{ pathname: url }} className="flex items-center px-6 py-2 cursor-pointer text-gray-100 hover:bg-gray-800">
            {label}
        </Link>
    )
}

export default NavLink;