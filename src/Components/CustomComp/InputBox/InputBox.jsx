import React, { useState } from 'react'
import './InputBox.css'

export default function InputBox({ input_title, value, onchange, error }) {
    const [borderError, setBorderError] = useState(error)

    const handleChange = (event) => {
        const newValue = event.target.value;

        if (borderError && newValue.trim() !== '') {
            setBorderError(false);
        }

        onchange(newValue);
    }

    const handleBlur = () => {
        // Apply error state if the input is empty
        if (value.trim() === '' && error === true) {
            setBorderError(true);
        }
    }
/*
    const inputStyle = {
        border: borderError ? '2px solid red' : '1px solid white',
    };
*/
    const inputStyle = {
        border: '2px solid red',
    };


    const handleClearInput = () => {
        onchange('');
    }

    return (
        <div className='input-box-comp'>
            <label className='input-box-title'>{input_title ? input_title : 'Input-Box'}</label>
            <div className='input-with-clear-btn'>
                <input type="text" className='input-box' value={value} onChange={handleChange} onBlur={handleBlur} style={inputStyle} />
                <button onClick={handleClearInput}>X</button>
            </div>
        </div>
    )
}
