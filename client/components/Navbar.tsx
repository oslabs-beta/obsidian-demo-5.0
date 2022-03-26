import { React, ReactRouterDom } from "../../deps.ts";

const { Link } = ReactRouterDom;

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/plants">About</Link>
                </li>
            </ul>
        </nav>
    )
}