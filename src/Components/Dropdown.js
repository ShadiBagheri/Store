import React from 'react';
import {Link} from "react-router-dom";
//Styles
import styles from "../Components/Dropdown.module.css";

const Dropdown = () => {
    return (
        <>
            <nav className={styles.dropdown}>
                <ul>
                    <li className={styles.dropdownItems}>
                        <Link to="/">
                            Women
                        </Link>
                    </li>
                    <li className={styles.dropdownItems}>
                        <Link to="/">
                            Men
                        </Link>
                    </li>
                    <li className={styles.dropdownItems}>
                        <Link to="/">
                            Shoes
                        </Link>
                    </li>
                    <li className={styles.dropdownItems}>
                        <Link to="/">
                            Bag
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Dropdown;