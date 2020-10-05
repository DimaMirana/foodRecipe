import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FormGroup } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Style from './formComponent.module.scss';
import Button from './../button/ButtonComponent';
import CheckboxComponent from '../checkBox/CheckboxComponent';
import RadioComponent from '../radio/RadioComponent';
import TextAreaComponent from '../textArea/TextAreaComponent';

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
    const [methodState, setMethodState] = useState({
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
      setMethodState({ ...methodState, [event.target.name]: event.target.checked });
      Object.keys(methodState).map(function (keyName, keyIndex) {
          if(methodState[keyName]=== true){
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
          className={classes.root}
        >
          <FormGroup>
            <TextAreaComponent
              label="Recipe Title"
              placeholder="Your recipe title"
              title="RECIPE TITLE"
            />
            <TextAreaComponent
              title="RECIPE DESCRIPTION"
              rows={4}
              label="Description"
              multiline={true}
              placeholder="Your recipe description"
            />
            <h4 className={Style.title}>RECIPE INGREDIENTS</h4>
            <div className={Style.wrapper}>
              <Button
                title="Add New Ingredient"
                name="otherButton"
                action="addIngredient"
              ></Button>
            </div>
            <h4 className={Style.title}>RECIPE INSTRUCTION</h4>
            <div className={Style.wrapper}>
              <Button
                title="Add New Instruction"
                name="otherButton"
                action="addInstruction"
              ></Button>
            </div>
            <h4 className={Style.title}>RECIPE DIFFICULTY</h4>
            <div className={Style.wrapper}>
              <RadioComponent
                value="Easy"
                selectedValue={selectedRecipe}
                handleChange={handleRadio}
              />
              <RadioComponent
                value="Intermediate"
                selectedValue={selectedRecipe}
                handleChange={handleRadio}
              />
              <RadioComponent
                value="Advanced"
                selectedValue={selectedRecipe}
                handleChange={handleRadio}
              />
            </div>
            <h4 className={Style.title}>COOKING METHOD</h4>
            <div className={Style.wrapper}>
              {Object.keys(methodState).map(function (keyName, keyIndex) {
                return (
                  <CheckboxComponent
                    key={keyIndex}
                    checked={methodState[keyName]}
                    handleChange={handleCookingMethod}
                    name={keyName}
                    label={keyName}
                  />
                );
              })}
            </div>
            <div className={Style.subDiv}>
              <div className={Style.content}>
                <TextAreaComponent
                  title="RECIPE CATEGORY"
                  label="Recipe Category"
                  placeholder="Your recipe category"
                />
              </div>
              <div className={Style.content}>
                <TextAreaComponent
                  title="RECIPE CRUSINE"
                  label="Recipe crusine"
                  placeholder="Your recipe crusine"
                />
              </div>
            </div>
            <div className={Style.subDiv}>
              <div className={Style.content}>
                <TextAreaComponent
                  title="RECIPE SERVING"
                  label="Servings"
                  placeholder="Approximate number of servings"
                />
              </div>
              <div className={Style.content}>
                <TextAreaComponent
                  title="COOKING TIME"
                  label="Cooking Time"
                  placeholder="Approximate cooking time"
                />
              </div>
            </div>
            <div className={Style.buttonDiv}>
              <Button
                title="Submit Recipe"
                name="otherButton"
                action="submitRecipe"
              ></Button>
            </div>
          </FormGroup>
        </Grid>
      </>
    );
}

export default Form
