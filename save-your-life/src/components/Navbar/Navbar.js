import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    

    return (
        <div>
            <li>
                <Link to = "/"> Dashboard </Link>
            </li>
            <li>
                <Link to = "/login">Log in</Link>
            </li>
        </div>
    )
}

export default Navbar;