import React, { useState } from 'react';
//ICONS
import { FiSearch } from 'react-icons/fi';
//Style
import styles from "../Components/Search.module.css";

const Search = () => {
    const [search, setSearch] = useState(" ");
    const searchHandler = event => {
        setSearch(event.target.value);
    }
    return (
        <div className={styles.search}>
            <input className={styles.searchInput} type="text" placeholder="Search..." value={search} onClick={searchHandler}/>
            <div className={styles.icon}>
                <FiSearch/>
            </div>
        </div>
    );
};

export default Search;