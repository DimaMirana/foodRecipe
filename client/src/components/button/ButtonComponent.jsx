import { TextField } from '@material-ui/core';
import React, {useState} from 'react';


function Button({title,name,action}) {
  const [ingredient,setIngredient] = useState(false);
  const toggle = () => {
    if(name !== 'btnDefault'){
      console.log('Button Pressed')
      setIngredient(true);
      console.log(ingredient);
    }
  }
  const foo = (ingredient) => {
    if(ingredient === true){
      return (
        <TextField
          //className={Style.spacing}
          id="outlined-basic"
          fullWidth
          required
          label="Recipe Title"
          placeholder="Your recipe title" 
          variant="outlined"
        />
      );
    }
    
  }
    return (
      <div
        onClick = {()=>{toggle()}}
        className={name}>
        {title}
        {ingredient === true? foo() :null}
      </div>
    );
}

Button.defaultProps = {
  name: "btnDefault"
}

export default Button;
