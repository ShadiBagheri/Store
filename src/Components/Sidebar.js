import React, {useState} from 'react';
import {Link} from "react-router-dom";
//Components
import {SidebarData} from "./SidebarData";
import SubMenu from "./SubMenu";
//Images
import menu from "../images/menu.png";
import close from "../images/close.png";


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);
    const sidebarHandler = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <div>
                <Link to="/" onClick={sidebarHandler}>
                    {
                        sidebar  ?
                            <img src={close} alt="close"/>  :
                            <img src={menu} alt="menu"/>
                    }
                </Link>
                {   sidebar &&
                    SidebarData.map((item,index) =>
                    <SubMenu key={index} item={item} subNav={item.subNav}/>)}
            </div>
        </>
    );
};

export default Sidebar;