import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from "./searchBarSlice";
import { loadSearchData } from "../../features/articledata/mainpagearticlesdataslice";
import { setIsLoadingSearch } from "../../features/articledata/mainpagearticlesdataslice";

export default function SearchBar() {
    const search = useSelector(selectSearchTerm);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleOnChange (e) {
        dispatch(setSearchTerm(e.target.value));
    }

    function handleOnSubmit (e) {
        e.preventDefault();
        dispatch(setIsLoadingSearch(true));
        navigate("/")
        dispatch(loadSearchData(search));
    }

    function hanldeOnFocus () {
        dispatch(clearSearchTerm());
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text" 
                    placeholder="Search articles " 
                    className="hs-search-field__input"
                    value={search} 
                    onChange={handleOnChange}
                    onFocus={hanldeOnFocus}   
                />
            </form>
        </div>
    )
}