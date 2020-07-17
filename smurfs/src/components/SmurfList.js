import React, { useContext } from 'react'
import { SmurfContext } from './App'

import Smurf from './Smurf'

const SmurfList = () => {
    const { smurfs } = useContext(SmurfContext)
    console.log("SmurfList -> smurfs", smurfs)
    
    return (
        <div>
            {smurfs.map(smurf => (
                <Smurf 
                    key={smurf.id}
                    smurf={smurf}
                
                />
            ))}
        </div>
    )
}
export default SmurfList