import React, { useState } from 'react'
import './SelectStatement.css'
import TextBox from '../../Components/CustomComp/TextBox/TextBox'
import InputBox from '../../Components/CustomComp/InputBox/InputBox';
import Button from '../../Components/CustomComp/Button/Button';
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SelectStatementText } from '../../data/guideTexts';

export default function SelectStatement() {
    const [wordsInput, setWordsInput] = useState('');
    const [prefixState, setPrefixState] = useState('');
    const [suffixState, setSuffixState] = useState('');
    const [outputState, setOutputState] = useState(null);
    const [showGuide, setShowGuide] = useState(false);
    const handleTextBoxChange = (value) => {
        setWordsInput(value);
    };

    const handleInputBoxChange = (value, inputType) => {
        if (inputType === 'prefix') {
            setPrefixState(value);
        } else if (inputType === 'suffix') {
            setSuffixState(value);
        }
    }

    const notification = (val) => {
        if (val) {
            toast.success("Submitted successfully!", { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 });
        }
        else {
            toast.warning("Please Enter The Tables Name or Middle Statement", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        }
    }
    const generateSelectStat = () => {
        const wordsArray = wordsInput.split('\n').filter(word => word !== '');

        if (wordsArray.length > 0 && wordsArray[0].trim() !== '') {
            notification(true);
            const outputStates = wordsArray.map(word => {
                const trimmedWord = word.trim();

                if (trimmedWord !== '') {
                    let result = `${prefixState} ${trimmedWord} ${suffixState}`;
                    return result;
                }

                return '';
            });

            const outputString = outputStates.join('\n');
            setOutputState(outputString);
        } else {
            notification(false);
            setOutputState('Please Enter The Tables Name or Middle Statement...');
        }
    }
    const handleGuideButtonClick = () => {
        setShowGuide(!showGuide);
        setOutputState(showGuide ? SelectStatementText : null);
    };
    return (
        <div className='select-stat-sec'>
            <TextBox textbox_placehold="Enter middle statements or tables name line by line..." value={wordsInput} onChange={handleTextBoxChange} />

            <div className='prefix-suffix-stat'>
                <InputBox input_title="Prefix statement" value={prefixState} onchange={(value) => handleInputBoxChange(value, 'prefix')} error={false} />

                <InputBox input_title="Suffix statement" value={suffixState} onchange={(value) => handleInputBoxChange(value, 'suffix')} error={false} />
            </div>

            <Button btnText='Submit' onClick={generateSelectStat} />
            <Button btnText='Guide' onClick={handleGuideButtonClick} />
            <ToastContainer />
            <OutputBox data={outputState} />
        </div>
    )
}