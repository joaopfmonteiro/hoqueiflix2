import React from "react";
import './header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                HOQUEIFLIX
            </div>
            <div className="header--user">
                <a href= "/">
                    <img src="https://www.seekpng.com/png/full/428-4287240_no-avatar-user-circle-icon-png.png" alt="user"/>
                </a>
            </div>
        </header>
    );
}