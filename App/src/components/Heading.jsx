import React from 'react'

function Heading({text}) {
    return (
        <div className='border_page'>
            <h1 className='page_heading'>{text}</h1>
            <div className='page_border'>
                <span></span>
            </div>
        </div>
    )
}

export default Heading