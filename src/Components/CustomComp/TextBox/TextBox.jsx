import React from 'react'
import './TextBox.css'
import Button from '../Button/Button';

export default function TextBox({ textbox_placehold, value, onChange }) {

    const handleChange = (event) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    const copyBtnCss = {
        position: 'absolute',
        right: 0,
        bottom: '1px',
        color: 'white'
    }

    const clearTextBox = () => {
        onChange('')
    }

    return (
        <>
            <div className='text-box'>
                <textarea className="text-area" placeholder={textbox_placehold ? textbox_placehold : 'Type Someting...'} value={value} onChange={handleChange}></textarea>

                <Button customCss={copyBtnCss} btnText='X' onClick={clearTextBox} />
            </div>
        </>
    )
}
