import React from "react";
import './featuredMovie.css';

export default ({item}) => {
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: "url("+item.backgroundImage+")"
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.gameName}</div>
                    <div className="featured--info">
                        <div className="featured--season">{item.season}</div>
                        <div className="featured--division">{item.division}</div>
                    </div>
                    <div className="featured--discription">{item.description}</div>
                    <div className="featured--buttons">
                        <a href={`/watch${item.id}`} className="featured--watchButton">►Assistir</a>
                        <a href={`/list/add/${item.id}`}className="featured--myListButton">+ Minha Lista</a>

                    </div>
                </div>
            </div>
           
        </section>
    );
}

