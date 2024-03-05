import React, { useState } from 'react';
import './NthHighest.css';
import InputBox from '../../Components/CustomComp/InputBox/InputBox';
import Button from '../../Components/CustomComp/Button/Button';
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nthHighestText } from '../../data/guideTexts';

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
  const notification = (val) => {
    if (val) {
      toast.success("Submitted successfully!", { position: toast.POSITION.TOP_RIGHT, autoClose: 1000 });
    }
    else {
      toast.warning("Please enter values for all input", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
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
    setOutputState(showGuide ? nthHighestText : null);
  };
  return (
    <div className='nth-highest'>
      <InputBox input_title='Column Name' value={columnName} onchange={(value) => handleColumnNameChange(value)} error={false} />
      <InputBox input_title='Table Name' value={tableName} onchange={(value) => handleTableNameChange(value)} error={false} />
      <InputBox input_title='Nth Highest' value={nthHighest} onchange={(value) => handleNthHighestChange(value)} error={false} />

      <Button btnText='Submit' onClick={generateSelectStat} />
      <Button btnText='Guide' onClick={handleGuideButtonClick} />
      <ToastContainer />
      <OutputBox data={outputState} />
    </div>
  );
}
