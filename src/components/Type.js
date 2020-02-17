import React from 'react';
import Data from './Data';


const Type = ()=>{
    function typeSelect () {
        let value = (Data.filter(item => item.type ==='Home'));
        console.log(value);
    }

    return (
        <div>
            <p>Click on Home to see contacts with type home in console</p>
        <button type="button" onClick={()=>{typeSelect()}}>Home</button>

    
        </div>
        
    );
}
export default Type;