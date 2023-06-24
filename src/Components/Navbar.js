import React,{ useState } from 'react';
import { Link } from "react-router-dom";
//Logo
import logo from "../images/logo.png";
//Component
import Sidebar from "./Sidebar";
import Search from "./Search";
import Dropdown from "./Dropdown";
//images
import cart from "../images/cart.png";
import user from "../images/user.png";
//Icons
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";
//STYLES
import styles from "../../src/Components/Navbar.module.css";


const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);
    const downHandler = event => {
        setDropdown(!dropdown);
    }

    return (
        <>
            <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <nav className={styles.menuBar}>
                 <ul>
                      <li>
                          <Link path="/Home">
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link path="/Products">
                              Products
                              {
                                 dropdown ?
                                 <AiOutlineUp className={styles.icon} onClick={downHandler}/>:
                                 <AiOutlineDown className={styles.icon} onClick={downHandler}/>
                              }
                          </Link>
                          { dropdown && <Dropdown/>}
                      </li>
                      <li>
                          <Link path="/About">
                             About Us
                          </Link>
                      </li>
                      <li>
                          <Link path="/Contacts">
                             Contact Us
                          </Link>
                      </li>
                 </ul>
            </nav>
            <Search/>
            <div className={styles.navIcon}>
                <Link path="/">
                    <img className={styles.userIcon} src={user} alt="user"/>
                </Link>
                <Link path="/">
                     <img className={styles.cartIcon} src={cart} alt="cart"/>
                </Link>
                <Sidebar/>
            </div>
            </div>
        </>
    );
};

export default Navbar;