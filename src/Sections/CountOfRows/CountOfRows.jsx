import React, { useState } from 'react'
import './CountOfRows.css'
import InputBox from '../../Components/CustomComp/InputBox/InputBox';
import TextBox from '../../Components/CustomComp/TextBox/TextBox';
import Button from '../../Components/CustomComp/Button/Button';
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox';
import Warning from '../../Components/CustomComp/Warning/Warning';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { countOfRows } from '../../data/guideTexts';


export default function CountOfRows() {
    const [wordsInput, setWordsInput] = useState('');
    const [specificWord, setSpecificWord] = useState('');
    const [outputSql, setOutputSql] = useState(null);
    const [warnMsg, setWarnMsg] = useState('');
    const [showGuide, setShowGuide] = useState(false);   
 
    const handleTextBoxChange = (value) => {
        setWordsInput(value);
    };

    const handleInputBoxChange = (value) => {
        setSpecificWord(value);

    }

    const notification=(val)=>{
        if(val!==''){
            toast.success("Submitted successfully!",{position:toast.POSITION.TOP_RIGHT,autoClose:1000});
        }
        else{
            toast.warning("Please enter the schema name",{position:toast.POSITION.TOP_RIGHT,autoClose:1000});
        }
    }

    const generateSql = () => {
        if (specificWord !== '') {
            notification(specificWord);
            const wordsArray = wordsInput.split('\n').filter(word => word !== '');
            const tablesList = wordsArray.length > 0 ? `AND t.name IN (${wordsArray.map(table => `'${table}'`).join(', ')})` : '';
            const specificWordCondition = specificWord ? `s.name = '${specificWord}'` : '';
            const finalSql = `SELECT 
    t.name AS table_name,
    SUM(p.rows) AS row_count
FROM 
    sys.tables t
INNER JOIN 
    sys.schemas s ON t.schema_id = s.schema_id
INNER JOIN 
    sys.partitions p ON t.object_id = p.object_id
WHERE 
    ${specificWordCondition}
    ${tablesList}
GROUP BY 
    t.name
ORDER BY 
    t.name;`;

            setOutputSql(finalSql);
        }
        else {
            notification(specificWord);
            setOutputSql('Please Enter The Schema Name...');
            setWarnMsg("Please enter something...");
        }
    };
    const handleGuideButtonClick = () => {
        setShowGuide(!showGuide);
        setOutputSql(showGuide ? countOfRows : null); // Clear output if guide is hidden
      };
    return (
        <div className='count-of-rows-sec'>
            <TextBox textbox_placehold="Enter tables name line by line..." value={wordsInput} onChange={handleTextBoxChange}/>
            <Warning warning_msg={warnMsg} warning_type="success" />

            <InputBox input_title="Schema Name" value={specificWord} onchange={handleInputBoxChange} error={true} />

            <Button btnText='Submit' onClick={generateSql} />
            <Button btnText='Guide' onClick={handleGuideButtonClick} />
            <ToastContainer/>

            <OutputBox data={outputSql} />
        </div>
    )
}

