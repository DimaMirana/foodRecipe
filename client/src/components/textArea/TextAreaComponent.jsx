import React from 'react';
import TextField from "@material-ui/core/TextField";

import Style from './textAreaComponent.module.scss';

function TextAreaComponent({label,placeholder,multiline,rows,title}) {
    return (
      <>
        <h4 className={Style.title}>{title}</h4>
        <TextField
          className={Style.spacing}
          id="outlined-basic"
          fullWidth
          multiline={multiline}
          rows={rows}
          required
          label={label}
          placeholder={placeholder}
          variant="outlined"
        />
      </>
    );
}

export default TextAreaComponent;
