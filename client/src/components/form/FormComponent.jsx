import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Style from './formComponent.module.scss';
import Button from './../button/ButtonComponent';
import CheckboxComponent from '../checkBox/CheckboxComponent';
import RadioComponent from '../radio/RadioComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    }
  },
}));

function Form() {
    const classes = useStyles();
    //state for cooking method
    const [state, setState] = useState({
      baking: false,
      grilling: false,
      roasting: false,
      tossing:false,
      steaming:false,
      stewing:false,
    });
    const [cookingMethod,setCookingMethod] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = React.useState(false);
    let tempArr = [];
    
    const handleCookingMethod = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
      Object.keys(state).map(function (keyName, keyIndex) {
          if(state[keyName]=== true){
              tempArr.push(keyName)
          }
          return (
            setCookingMethod(tempArr)
          )
      })
      
    };
    
    const handleRadio = (event) => {
        setSelectedRecipe(event.target.value);
    }

    return (
      <>
        <Grid
          item
          xs={6}
          // direction="column"
          // justify="center"
          // alignItems="center"
          className={classes.root}
        >
          <FormGroup>
            <h4>RECIPE TITLE</h4>
            <TextField
              className={Style.spacing}
              id="outlined-basic"
              fullWidth
              required
              label="Recipe Title"
              placeholder="Your recipe title"
              variant="outlined"
            />
            <h4>RECIPE DESCRIPTION</h4>
            <TextField
              className={Style.spacing}
              id="outlined-basic"
              fullWidth
              required
              multiline
              rows={4}
              label="Description"
              placeholder="Your recipe description"
              variant="outlined"
            />
            <h4>RECIPE INGREDIENTS</h4>
            <div className={Style.wrapper}>
              <Button title="Add New Ingredient" name="otherButton"></Button>
            </div>
            <h4>RECIPE INSTRUCTION</h4>
            <div className={Style.wrapper}>
              <Button title="Add New Instruction" name="otherButton"></Button>
            </div>
            <h4>RECIPE DIFFICULTY</h4>
            <div className={Style.wrapper}>
              <RadioComponent
                selectedValue={selectedRecipe}
                handleChange={handleRadio}
                value="Easy"
              />
              <RadioComponent
                selectedValue={selectedRecipe}
                handleChange={handleRadio}
                value="Intermediate"
              />
              <RadioComponent
                selectedValue={selectedRecipe}
                handleChange={handleRadio}
                value="Advanced"
              />
            </div>
            <h4>COOKING METHOD</h4>
            <div className={Style.wrapper}>
              {Object.keys(state).map(function (keyName, keyIndex) {
                return (
                  <CheckboxComponent
                    key={keyIndex}
                    checked={state[keyName]}
                    handleChange={handleCookingMethod}
                    name={keyName}
                    label={keyName}
                  />
                );
              })}
            </div>
          </FormGroup>
        </Grid>
      </>
    );
}

export default Form
