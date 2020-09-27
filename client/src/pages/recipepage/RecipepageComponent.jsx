import React from 'react'

function Recipe(props) {
    console.log(props.match.params.type);
    console.log(props.match.params.name);
    return (
        <div>
            Hello from recipe page
        </div>
    )
}

export default Recipe;
