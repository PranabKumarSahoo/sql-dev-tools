import React, { useState } from 'react';
import './NthMinimum.css';
import TextBox from '../../Components/CustomComp/TextBox/TextBox';
import InputBox from '../../Components/CustomComp/InputBox/InputBox';
import Button from '../../Components/CustomComp/Button/Button';
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox';

export default function NthMinimum() {
  const [columnName, setColumnName] = useState('');
  const [tableName, setTableName] = useState('');
  const [nthMinimum, setnthMinimum] = useState('');
  const [outputState, setOutputState] = useState(null);

  const handleColumnNameChange = (value) => {
    setColumnName(value);
  };

  const handleTableNameChange = (value) => {
    setTableName(value);
  };

  const handleNthMinimumChange = (value) => {
    setnthMinimum(value);
  };

  const generateSelectStat = () => {
    if (columnName && tableName && nthMinimum) {

      //n_minus_1 for MySQL Syntax
      const n_minus_1 = parseInt(nthMinimum, 10) - 1;
      const result = `
      Using Oracle 10g:
      SELECT ${columnName}
      FROM (
                SELECT ROWNUM srno , ${columnName}
                FROM (
                        SELECT DISTINCT ${columnName}
                        FROM ${tableName}
                        ORDER BY ${columnName} ASC
                     ) 
             ) WHERE ROWNUM = ${nthMinimum};

      MySQL:
      SELECT ${columnName}
      FROM ${tableName}
      ORDER BY ${columnName} ASC
      LIMIT ${n_minus_1}, 1;

      `;
      setOutputState(result);
    } else {
      setOutputState('Please enter values for all inputs.');
    }
  };

  return (
    <div className='nth-highest'>
      <InputBox input_title='Column Name' value={columnName} onchange={(value) => handleColumnNameChange(value)} error={false} />
      <InputBox input_title='Table Name' value={tableName} onchange={(value) => handleTableNameChange(value)} error={false} />
      <InputBox input_title='Nth Highest' value={nthMinimum} onchange={(value) => handleNthMinimumChange(value)} error={false} />

      <Button btnText='Submit' onClick={generateSelectStat} />

      <OutputBox data={outputState} />
    </div>
  );
}