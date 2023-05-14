import React, { useState } from 'react';

//ICONS
import { FiSearch } from 'react-icons/fi';

const Search = () => {
    // const [items, setItems] = useState([]);
    const [search, setSearch] = useState(" ");

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="search" value={search} onClick={searchHandler}/>
            <FiSearch/>
        </div>
    );
};

export default Search;