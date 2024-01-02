import React, { useState } from 'react';
import './NthHighest.css';
import TextBox from '../../Components/CustomComp/TextBox/TextBox';
import InputBox from '../../Components/CustomComp/InputBox/InputBox';
import Button from '../../Components/CustomComp/Button/Button';
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox';

export default function NthHighest() {
  const [columnName, setColumnName] = useState('');
  const [tableName, setTableName] = useState('');
  const [nthHighest, setNthHighest] = useState('');
  const [outputState, setOutputState] = useState(null);

  const handleColumnNameChange = (value) => {
    setColumnName(value);
  };

  const handleTableNameChange = (value) => {
    setTableName(value);
  };

  const handleNthHighestChange = (value) => {
    setNthHighest(value);
  };

  const generateSelectStat = () => {
    if (columnName && tableName && nthHighest) {
      const result = `select ${columnName} from 
      (select rownum srno, ${columnName} from 
        (select distinct ${columnName} from 
            ${tableName} order by ${columnName} desc))where srno = ${nthHighest};`;
      setOutputState(result);
    } else {
      setOutputState('Please enter values for all inputs.');
    }
  };

  return (
    <div className='nth-highest'>
      <InputBox input_title='Column Name' value={columnName} onchange={(value) => handleColumnNameChange(value)} error={false} />
      <InputBox input_title='Table Name' value={tableName} onchange={(value) => handleTableNameChange(value)} error={false} />
      <InputBox input_title='Nth Highest' value={nthHighest} onchange={(value) => handleNthHighestChange(value)} error={false} />

      <Button btnText='Submit' onClick={generateSelectStat} />

      <OutputBox data={outputState} />
    </div>
  );
}
