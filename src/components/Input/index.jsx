import React, { useState } from 'react'

export default props => {
    const [num, setNum] = useState()
    return (
        <>
            <input type="number" value={num} onChange={e => setNum(e.target.value)} />
        </>
    )
}