import React, { useRef } from 'react'
import './OutputBox.css'
import Button from '../Button/Button'

export default function OutputBox({ data }) {
    const copyBtnCss = {
        position: 'absolute',
        right: 0,
        color: 'green'
    }

    const textareaRef = useRef();

    const handleCopyClick = () => {
        // Select the text inside the textarea
        textareaRef.current.select();

        // Copy the selected text to the clipboard
        document.execCommand('copy');
    };
    return (
        <>
            <div className='output-box-div'>
                <textarea className='output-box' readOnly value={`${data != null ? data : 'Click Submit to see the Output...'}`} ref={textareaRef}>
                </textarea>
                <Button customCss={copyBtnCss} btnText='Copy' onClick={handleCopyClick}/>
            </div>
        </>
    )
}
