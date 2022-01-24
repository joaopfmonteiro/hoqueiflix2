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
                    <img src="https://firebasestorage.googleapis.com/v0/b/hoqueiflix2.appspot.com/o/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66e306b15.0756271715374598221983.png?alt=media&token=6daec625-7175-4b21-9037-19e744c9976b" alt="user"/>
                </a>
            </div>
        </header>
    );
}