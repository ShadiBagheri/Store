import React from 'react';
import {Link} from "react-router-dom";

//Icons


const Dropdown = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Women's Dress
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Mens Wear
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Shoes
                        </Link>
                    </li>
                    <li>
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