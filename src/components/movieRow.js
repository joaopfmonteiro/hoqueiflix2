import React from 'react';
import'./movieRow.css';

export default ({title, items}) => {
    console.log(items.results)
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listeare">
                <div className="movieRow--list">
                    {items.length > 0 && items.map((item, key) =>(
                        <div key={key} className="movieRow--item">
                            <img src= {`${item.poster_path}`} alt={item.gameName} />
                        </div>
                    ))}   
                </div>
            </div>
        </div>
    );
}