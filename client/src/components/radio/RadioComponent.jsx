import React from 'react';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

function RadioComponent({selectedValue,handleChange,value}) {
    return (
      <>
        <RadioGroup
          onChange={handleChange}
          value={selectedValue}>
            <FormControlLabel value={value} control={<Radio color="default" />} label={value} />
        </RadioGroup>
      </>
    );
}

export default RadioComponent;
