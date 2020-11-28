import React, { useState, useRef , useLayoutEffect } from 'react'
import Content from './Content'


const Box = () => {

    const [height, setHeight] = useState(100)

    const boxRef = useRef(null)
    const timeRef = useRef(0)

    useLayoutEffect(() => {
        if (boxRef.current.getBoundingClientRect().height < 150) {//offsetHeight === getBoundingClientRect().height 
            setHeight(height+100)
            console.log(`Attente: ${performance.now() - timeRef.current}`)
        }
        },[height])

    timeRef.current = performance.now()    

    const boxStyle = {
        width:'400px',
        height: `${height}px`,
        margin: '0 auto',
        background: height > 100 ? 'red' : 'blue'
    }

    return (
        <div ref={boxRef} style={boxStyle}>
            {`Height:${height}`}
            <Content/>
        </div>
    )
}

export default Box
