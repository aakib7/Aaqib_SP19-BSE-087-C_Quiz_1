import React,{useState} from 'react';
import axios from "axios";
import SingleRecipe from "./SingleRecipe";
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = ()=>{
        setLoading(true);
        axios.get("https://usman-recipes.herokuapp.com/api/recipes").then((response)=>{
            setRecipes(response.data);
            setLoading(false);
         });
    };  
    React.useEffect(getData, []);
    return (<div>
         <h1>Recipes</h1>
    {loading && <p>Loading...</p>}
      {recipes.length === 0 && !loading && (
        <p>Sorry We have No Recipes to Show</p>
      )}
        
        {recipes.map((recipe)=>
            <SingleRecipe recipe={recipe}/>
        )}
    </div>);
}

export default Recipes;