import React, { useRef, useState } from 'react';
import './OutputBox.css';
import Button from '../Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function OutputBox({ data }) {
    const [copyBtnText, setCopyBtnText] = useState('Copy');
    const [copyBtnCss, setCopyBtnCss] = useState({
        position: 'absolute',
        right: 0,
        color: 'red'
    });

    const textareaRef = useRef();

    const handleCopyClick = () => {
        // Select the text inside the textarea
        textareaRef.current.select();
        toast.success("Copied", { position: toast.POSITION.TOP_RIGHT,autoClose:1000 });

        // Change the style and text of the copy button
        setCopyBtnCss({
            position: 'absolute',
            right: 0,
            color: 'green', // Change color back to green on successful copy
        });
        setCopyBtnText('✓');

        document.execCommand('copy');

        // Reset the style and text after two seconds
        setTimeout(() => {
            setCopyBtnCss({
                position: 'absolute',
                right: 0,
                color: 'red'
            });
            setCopyBtnText('Copy');
        }, 2000);
    };

    return (
        <>
            <div className='output-box-div'>
                <textarea
                    className='output-box'
                    readOnly
                    value={`${data != null ? data : 'Click Submit to see the Output...'}`}
                    ref={textareaRef}
                ></textarea>
                <Button customCss={copyBtnCss} btnText={copyBtnText} onClick={handleCopyClick} />
                <ToastContainer />
            </div>
        </>
    );
}
