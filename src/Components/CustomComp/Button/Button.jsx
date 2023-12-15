import React from 'react'
import './Button.css'

export default function Button({ btnText, customCss, onClick }) {
    return (
        <>
            <button style={customCss} className='submit-btn' onClick={onClick}>{btnText ? btnText : 'Button'}</button>
        </>
    )
}
