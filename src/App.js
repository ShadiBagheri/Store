import React from 'react';
import {Route, Routes} from "react-router-dom";
//Components
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Home from "./Components/pages/Home";

const App = () => {
    return (
        <>  <Search/>
            <Navbar/>
            <Routes>
                <Route path="/" element={ <Home/>}/>
            </Routes>
        </>
    );
};

export default App;