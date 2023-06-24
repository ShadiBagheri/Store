import React, {useState} from 'react';
import {Link} from "react-router-dom";

const SubMenu = ({item}) => {

    const [nav, setNav] = useState(false);
    const subNavHandler = () => {
        setNav(!nav);
    }
    return (
        <>
          <Link to={item.path} onClick={item.subNav && subNavHandler }>
              <div>
                  {item.name}
              </div>
              <div>
                  {item.subNav && nav ?
                      item.closed :
                      item.subNav ?
                      item.opened :
                      null
                  }
              </div>
          </Link>
                {nav && item.subNav.map((item, index) =>
                    <Link to={item.path} key={index} item={item}>
                        <div>
                            {item.name}
                        </div>
                    </Link>
                )}
        </>
    );
};

export default SubMenu;