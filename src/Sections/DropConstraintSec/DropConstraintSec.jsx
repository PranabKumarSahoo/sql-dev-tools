import React, { useState } from 'react'
import './DropConstraintSec.css'
import TextBox from '../../Components/CustomComp/TextBox/TextBox'
import Button from '../../Components/CustomComp/Button/Button'
import OutputBox from '../../Components/CustomComp/OutputBox/OutputBox'

export default function DropConstraintSec() {
    const [textBoxValue, setTextBoxValue] = useState('');
    const [outputData, setOutputData] = useState(null)

    const handleTextBoxChange = (value) => {
        setTextBoxValue(value);
    };

    const handleButtonClick = () => {
        let lines = textBoxValue.split("\n");
        if (lines.length > 0 && lines[0].trim() !== '') {
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
            setOutputData('Please Enter The Key_Constraint...')
        }
    };
    return (
        <div className='drop-const-sec'>
            <TextBox textbox_placehold="Enter table & constraint name line by line as per syntax mentioned below...
            {table_name}: {constraint_name}" value={textBoxValue} onChange={handleTextBoxChange} />

            <Button btnText='Submit' onClick={handleButtonClick} />

            <OutputBox data={outputData} />
        </div>
    )
}
