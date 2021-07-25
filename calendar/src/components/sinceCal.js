import React from 'react'

function sinceCal({dayConvert,}) {
    
    return (
        <div className="day-since">
            
            <div className="number" >
              <h1>
                 {`${dayConvert} Days Ago`}    
              </h1>
            </div>
           
            
        </div>
    )
}

export default sinceCal
