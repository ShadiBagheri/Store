import React from 'react';
//Components
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Home from "./Components/pages/Home";

const App = () => {
    return (
        <>
        <Navbar/>
        <Search/>
            <Home/>
        </>
    );
};

export default App;