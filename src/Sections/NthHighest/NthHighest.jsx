import React, { useState } from 'react';
import './NthHighest.css';
import TextBox from '../../Components/CustomComp/TextBox/TextBox';
import InputBox from '../../Components/CustomComp/InputBox/InputBox';
import Button from '../../Components/CustomComp/Button/Button';
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NthHighest() {
  const [columnName, setColumnName] = useState('');
  const [tableName, setTableName] = useState('');
  const [nthHighest, setNthHighest] = useState('');
  const [outputState, setOutputState] = useState(null);
  const [showGuide, setShowGuide] = useState(false);
  const handleColumnNameChange = (value) => {
    setColumnName(value);
  };

  const handleTableNameChange = (value) => {
    setTableName(value);
  };

  const handleNthHighestChange = (value) => {
    setNthHighest(value);
  };
  const notification=(val)=>{
    if(val){
        toast.success("Submitted successfully!",{position:toast.POSITION.TOP_RIGHT,autoClose:1000});
    }
    else{
        toast.warning("Please enter values for all input",{position:toast.POSITION.TOP_CENTER,autoClose:1000});
    }
}

  const generateSelectStat = () => {
    if (columnName && tableName && nthHighest) {
      notification(true);
      const result = `select ${columnName} from 
      (select rownum srno, ${columnName} from 
        (select distinct ${columnName} from 
            ${tableName} order by ${columnName} desc))where srno = ${nthHighest};`;
      setOutputState(result);
    } else {
      notification(false);
      setOutputState('Please enter values for all inputs.');
    }
  };
  const handleGuideButtonClick = () => {
    setShowGuide(!showGuide);
    setOutputState(showGuide ? getGuideText() : null); // Clear output if guide is hidden
  };
  return (
    <div className='nth-highest'>
      <InputBox input_title='Column Name' value={columnName} onchange={(value) => handleColumnNameChange(value)} error={false} />
      <InputBox input_title='Table Name' value={tableName} onchange={(value) => handleTableNameChange(value)} error={false} />
      <InputBox input_title='Nth Highest' value={nthHighest} onchange={(value) => handleNthHighestChange(value)} error={false} />

      <Button btnText='Submit' onClick={generateSelectStat} />
      <Button btnText='Guide' onClick={handleGuideButtonClick} />
      <ToastContainer/>
      <OutputBox data={outputState} />
    </div>
  );
}

const getGuideText = () => {
  return `
  Instructions:

  1. Enter the name of the column you want to find the Nth highest value for.
  2. Enter the name of the table containing the data.
  3. Enter the value of N (e.g., 3 for the 3rd highest value).
  4. Click the "Submit" button to generate the SQL statement.

  Example:

  If you want to find the 2nd highest salary in the "employees" table,
  enter "salary" for the column name, "employees" for the table name, and "2" for the Nth highest.
  `;
};