import React from 'react';
//Icon
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai";
// //Style
// import styles from "../Components/SidebarData.module.css";

export const SidebarData = [
        {
            path: "/Home",
            name: "Home"
        },
        {
            path: "/Products",
            name: "Products",
            closed: <AiOutlineUp/>,
            opened: <AiOutlineDown/>,
            subNav : [
                {
                    path: "/Women",
                    name: "Women"
                },
                {
                    path: "/Men",
                    name: "Men"
                },
                {
                    path: "/Shoes",
                    name: "Shoes"
                },
                {
                    path: "/Bag",
                    name: "Bag"
                },
            ]
        },
        {
            path: "/About",
            name: "About Us"
        },
        {
            path: "/Contacts",
            name: "Contacts Us"
        },
    ]


    // const [dropdown, setDropdown] = useState(false);
    // const downHandler = event => {
    //     setDropdown(!dropdown);
    // }
