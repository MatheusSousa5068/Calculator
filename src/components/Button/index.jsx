import React, { useState } from 'react'

import Input from '../Input'

export default (props) => {
    
    const [num1, setNum1] = useState()
    
    function Calc() {
        alert(this.state)
    }
    return (
        <>
            <Input id='1'/>
            <Input id='2'/>
            
            <button onClick={Calc}>moves</button>
        </>
    )
}

