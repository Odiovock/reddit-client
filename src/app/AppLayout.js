import React from "react";
import {Outlet, NavLink} from "react-router-dom";
import ROUTES from  "./routes";
import SearchBar from "../components/searchbar/SearchBar";
import Filter from "../components/filter/Filter";

export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li className="navlink">
                        <NavLink to={ROUTES.home()}>
                            <div className={"navbar-navlink"}>Home</div>
                        </NavLink>
                    </li>
                    <li className="searchbar">
                        <SearchBar/>
                    </li>
                    <li className="filter">
                        <Filter/>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}