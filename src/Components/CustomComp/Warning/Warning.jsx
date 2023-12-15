import React, { useEffect, useState } from 'react'
import './Warning.css'

export default function Warning({ warning_msg, warning_type }) {
    const [visible, setVisible] = useState(false)
    const warningStyle = {
        color: warning_type === 'error' ? 'red' : warning_type === 'success' ? 'green' : 'black',
        display: visible ? 'block' : 'none',
    };

    useEffect(() => {
        let timeoutId;
      if(warning_msg && visible) {
        timeoutId = setTimeout(() => {
            setVisible(true)
        }, 3000);

        return () => {
            clearTimeout(timeoutId)
        }
      }
    }, [warning_msg, visible])
    

    return (
        <>
            <p className='warning-msg' style={warningStyle}>
                {warning_msg}
            </p>
        </>
    )
}
