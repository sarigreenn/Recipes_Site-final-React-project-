// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import HomePage from "../user/homepage";
// const DeleteRecipe = () => {
//   const navig = useNavigate()
//   const dispatch = useDispatch();
//   const { state } = useLocation();
//   const { Id } = state;
//   //המתכון בעצמו
//   const recipe = useSelector(x => x.recipes?.find(x => x.Id === Id))

//   // if (!recipe.usetId === user) {
//   //   alert("you can not delete this recipe")
//   //   navig("/", { state: { id } })
//   // }



//   const recipeId = useSelector(x => x.recipes?.findIndex(x => x.Id === Id))
//   const [recipes, setRecipes] = useState();
//   const [usetId, setUserId] = useState();
//   useEffect = (() => {
//     axios.post("http://localhost:8080/api/recipe/delete", recipeId)
//       .then(x => {
//         setRecipes(x.data)
//         dispatch({ type: 'DELETE_RECIPE', recipeId: x.Id });
//       })
//       .catch(err => console.log(err))
//       .finally()
//   }, [])


//   return <div> <HomePage/></div>

// }
// export default DeleteRecipe;