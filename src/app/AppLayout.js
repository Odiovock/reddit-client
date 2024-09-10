import React from "react";
import {Outlet, NavLink} from "react-router-dom";
import ROUTES from  "./routes";
import SearchBar from "../features/searchbar/SearchBar";
import Filter from "../features/filter/Filter";

export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={ROUTES.home()}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <SearchBar/>
                    </li>
                    <li>
                        <Filter/>
                    </li>
                </ul>
            </nav>
        </div>
    )
}