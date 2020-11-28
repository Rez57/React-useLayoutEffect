import React, {useState, useEffect, useLayoutEffect} from 'react'

const Layout = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        //Effect
        console.log("je suis dans use effect")
    
    },[count])

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count+1)}>+1</button>
            
        </div>
    )
}

export default Layout
