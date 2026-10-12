import React from 'react'

const ChildrenP = ({ children, heading }) => {
    return (
        <div className='border-2 p-4 '>
            {/* <h1 className='container'> {heading = "Heading"} </h1> */}
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur doloremque minima ipsa iusto quisquam cumque ullam dicta facere neque! Nulla! */}
            {children}
        </div>
    )
}

export default ChildrenP


