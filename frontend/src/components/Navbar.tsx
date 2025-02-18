import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <>
            <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
                <NavLink to="/" end>Accueil</NavLink>
                <NavLink to="/about">À Propos</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </>
    )
}

export default Navbar