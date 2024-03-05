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
        textareaRef.current.select();
        toast.success("Copied", { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 });

        setCopyBtnCss({
            position: 'absolute',
            right: 0,
            color: 'green',
        });
        setCopyBtnText('✓');

        document.execCommand('copy');

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
