// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useSelector,useDispatch} from "react-redux";
// import { useLocation } from "react-router";

// const EditRecipe=()=>{
// const { state, pathname } = useLocation();
// const { id } = state;
// const dispatch = useDispatch();
// const recipe = useSelector(x => x.recipes.find(x => x.id == id))
// const [recipes,setRecipes]=useState();
// useEffect=(()=>{
// axios.post("http://localhost:8080/api/recipe/edit",recipe)
// .then(x => {
//     setRecipes(x.data)
//     dispatch({ type: 'EDIT_RECIPE', recipeObj: x.data });
//   })
//   .catch(err => console.log(err))
//   .finally()


// },[])





// }
// export default EditRecipe;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { useLocation } from "react-router";

const EditRecipe=()=>{
const { state, pathname } = useLocation();
const { id } = state;
const dispatch = useDispatch();
const recipe = useSelector(x => x.recipes.find(x => x.Id == id))
const [recipes,setRecipes]=useState();
useEffect=(()=>{
axios.post("http://localhost:8080/api/recipe/edit",recipe)
.then(x => {
    setRecipes(x.data)
    dispatch({ type: 'EDIT_RECIPE', recipeObj: x.data });
  })
  .catch(err => console.log(err))
  .finally()


},[])





}
export default EditRecipe;





