import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function CheckboxComponent({checked,handleChange,name,label}) {
    return (
        <>
         <FormControlLabel control={
             <Checkbox
                 checked = {checked}
                 onChange = {handleChange}
                 name = {name}
                 color = "default"
             />
            }
             label = {label}
         />   
        </>
    )
}

export default CheckboxComponent;
