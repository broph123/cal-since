import React from 'react'

function sinceCal({dayConvert,title}) {
    
    return (
        <div className="day-since">
            <h2>{`Days since ${title}`}</h2>
            <div className="number" >
              <h1>
                 {`${dayConvert} Days`}    
              </h1>
            </div>
           
            
        </div>
    )
}

export default sinceCal
