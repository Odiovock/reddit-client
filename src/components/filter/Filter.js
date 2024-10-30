import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, clearFilter, selectFilter } from "./filterslice";
import { clearSearchTerm } from "../searchbar/searchBarSlice";
import { filterArray } from "../../ressources/data/filterdata";
import { loadFilteredData, setIsLoadingFilter } from "../../features/articledata/mainpagearticlesdataslice";
import { useNavigate } from "react-router-dom";

export default function Filter() {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOnFilterChange (e) {
        dispatch(setFilter(e.target.value));
        dispatch(clearSearchTerm());
        handleContentLoad(e);
    }

    function handleContentLoad (e) {
        e.preventDefault();
        dispatch(setIsLoadingFilter(true));
        navigate("/");
        dispatch(loadFilteredData(e.target.value));
        e.target.blur();
    }

    function handleOnFocusFilter (e) {
        dispatch(clearFilter());
    }

    return (
        <div>
            <form>
                <select 
                    id="filter"
                    className="navbar-filter" 
                    onChange={handleOnFilterChange}
                    onFocus={handleOnFocusFilter}
                    value={filter}
                >
                    <option value="">- Choose a filter -</option>
                    {
                        filterArray.map((theme) => {
                            return <option key={theme.value} value={theme.value}>{theme.display}</option>
                        })
                    }
                </select>
            </form>
        </div>
    )
}