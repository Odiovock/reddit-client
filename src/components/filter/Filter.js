import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearFilter, selectFilter } from "./filterslice";

export default function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <div>
            <form>
                <select className="navbar-filter">
                    <option value="test">test</option>
                </select>
            </form>
        </div>
    )
}