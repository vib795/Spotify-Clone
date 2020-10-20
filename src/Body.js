import React from 'react';
import Header from "./Header";
import "./Body.css";

function Body() {
    return (
        <div className="body">
            <Header spotify={spotify} />
        </div>
    )
}

export default Body;
