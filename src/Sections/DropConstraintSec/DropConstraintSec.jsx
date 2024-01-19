import React, { useState } from 'react'
import './DropConstraintSec.css'
import TextBox from '../../Components/CustomComp/TextBox/TextBox'
import Button from '../../Components/CustomComp/Button/Button'
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function DropConstraintSec() {
    const [textBoxValue, setTextBoxValue] = useState('');
    const [outputData, setOutputData] = useState(null)
    const [showGuide, setShowGuide] = useState(false);
    const handleTextBoxChange = (value) => {
        setTextBoxValue(value);
    };

    const notification=(val)=>{
        if(val>0){
            toast.success("Submitted successfully!",{position:toast.POSITION.TOP_RIGHT,autoClose:1000});
        }
        else{
            toast.warning("Please enter key constraint",{position:toast.POSITION.TOP_RIGHT,autoClose:1000});
        }
    }

    const handleButtonClick = () => {
        let lines = textBoxValue.split("\n");
        if (lines.length > 0 && lines[0].trim() !== '') {
            notification(lines.length);
            let result = "";

            for (let i = 0; i < lines.length; i++) {
                let line = lines[i].trim();

                if (line !== '') {
                    result += "ALTER TABLE " + line;

                    if (line.includes(":")) {
                        result = result.replace(":", " DROP CONSTRAINT ");
                    }

                    // Add a new line character after each transformed line
                    result += ";\n";
                }
            }

            // Set the result to the state
            setOutputData(result);
        } else {
            notification(0);
            setOutputData('Please Enter The Key_Constraint...')
        }
    };
    const handleGuideButtonClick = () => {
        setShowGuide(!showGuide);
        setOutputData(showGuide ? getGuideText() : null); // Clear output if guide is hidden
      };
    return (
        <div className='drop-const-sec'>
            <TextBox textbox_placehold="Enter table & constraint name line by line as per syntax mentioned below...
            {table_name}: {constraint_name}" value={textBoxValue} onChange={handleTextBoxChange} />

            <Button btnText='Submit' onClick={handleButtonClick} />
            <Button btnText='Guide' onClick={handleGuideButtonClick} />
            <ToastContainer/>
            <OutputBox data={outputData} />
        </div>
    )
}


const getGuideText = () => {
    return `
      Instructions:
  
      1. **Enter table and constraint names:**
        - Type the table and constraint names you want to drop, line by line, in the following format:
          {table_name}: {constraint_name}
  
        - For example:

          employees: emp_pk
          customers: cust_fk
          
  
        - Each line should specify one table and one constraint to drop.
  
      2. **Click "Submit" to generate the SQL statements:**
        - The generated SQL statements will be displayed in the output box below. You can then copy and use them in your database.
  
      **Example:**
  
      To drop the primary key constraint "emp_pk" from the "employees" table and the foreign key constraint "cust_fk" from the "customers" table:
  
      - Enter the following in the text box:
  
        
        employees: emp_pk
        customers: cust_fk
  
      - Click "Submit".
  
      The generated SQL statements will be:
  
      ALTER TABLE employees DROP CONSTRAINT emp_pk;
      ALTER TABLE customers DROP CONSTRAINT cust_fk;
    `;
  };
  
  