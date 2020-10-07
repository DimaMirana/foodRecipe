import React from 'react';
import { Paper } from "@material-ui/core";
import './../category/category.scss'

function PaperComponent({img,slug}) {
    return (
      <>
        <Paper variant="outlined"  elevation={3}>
          <div className="category-center" style={{backgroundImage:`url(${img})`}}>
          </div>
        </Paper>
      </>
    );
}

export default PaperComponent
