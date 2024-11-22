import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Index.css';
import '../css/Tailwind.css';

const routes = [
    {name : "Inicio",             path : "/",                        id : "home"},
    {name : "Productos",          path : "/products",                id : "products"},
    {name : "Agregar productos",  path : "/products/add_camiseta",   id : "add-products"},
    {name : "Agregar prendas",    path : "/products/add_prenda",     id : "add-prendas"},
    {name : "Iniciar sesión",     path : "/sign-in",                 id : "sign-in"},
    {name : "Registrarse",        path : "/log-in",                  id : "log-in"}
]

function Menu() {
    return (
        <nav>
            <ul className="flex flex-row justify-center items-center">
                {
                    routes.map(route => {
                        return <li key={route.id}>
                            <NavLink
                                to={route.path}
                                className="flex justify-center items-center py-10 px-5 h-12 bg-transparent text-white font-medium transition-colors hover:bg-white hover:text-[#E2211C]"
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    })
                }
            </ul>
        </nav>
    );
}

export default Menu;