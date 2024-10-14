import React from "react";
import {Outlet, NavLink} from "react-router-dom";
import ROUTES from  "./routes";
import SearchBar from "../components/searchbar/SearchBar";
import Filter from "../components/filter/Filter";
import { useDispatch } from "react-redux";
import { clearSearchTerm } from "../components/searchbar/searchBarSlice";
import { clearFilter } from "../components/filter/filterslice";
import { loadHomeData } from "../features/articledata/mainpagearticlesdataslice";

export default function AppLayout() {
    const dispatch = useDispatch();

    function handleOnclick () {
        dispatch(clearSearchTerm());
        dispatch(clearFilter());
        dispatch(loadHomeData());
    }

    return (
        <div>
            <nav>
                <ul>
                    <li className="navlink">
                        <NavLink to={ROUTES.home()} onClick={handleOnclick}>
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