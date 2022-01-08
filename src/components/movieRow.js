import React from 'react';
import'./movieRow.css';

export default ({title, items}) => {
    console.log(items.results)
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listeare">
            {items.length > 0 && items.map((item, key) =>(
                    <img src= {`${item.poster_path}`}/>
                ))}   
            </div>
        </div>
    );
}