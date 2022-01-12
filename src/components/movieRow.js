import React, {useState} from 'react';
import'./movieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {

        let x = scrollX + Math.round(window.innerWidth/2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x)
    }
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listw = items.length  *250;
        if((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) - 60;
        }
        setScrollX(x);
        

    }
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left"  onClick={handleLeftArrow}>
                < NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listeare">
                <div className="movieRow--list" style={{marginLeft: scrollX,
                        width: items.length * 250}}>
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
