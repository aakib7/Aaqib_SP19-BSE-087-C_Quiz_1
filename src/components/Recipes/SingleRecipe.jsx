import React from 'react';
const Recipe = (props) => {
    return ( <>
    <h3>
        {props.recipe.title}
      </h3>
      <p>
        {props.recipe.body}
      </p>
    </> );
}
 
export default Recipe;