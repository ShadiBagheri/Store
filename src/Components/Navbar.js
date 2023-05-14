import React, { useState } from 'react';
import { Link } from "react-router-dom";
//Logo
import logo from "../images/logo.png";
//Component
import Dropdown from "./Dropdown";
//Icons
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
//STYLES
import styles from "../../src/Components/Navbar.module.css";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const downHandler = event => {
        setDropdown(!dropdown)
    }

    return (
        <>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Products">
                            Products
                            {
                                dropdown ?
                                    <AiOutlineUp onClick={downHandler}/>:
                                    <AiOutlineDown onClick={downHandler}/>
                            }
                        </Link>
                        { dropdown && <Dropdown/>}
                    </li>
                    <li>
                        <Link to="/About">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contacts">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <div>
                    <FaUser/>
                </div>
                <div>
                    <BsFillBagFill/>
                </div>
            </div>
        </>
    );
};

export default Navbar;