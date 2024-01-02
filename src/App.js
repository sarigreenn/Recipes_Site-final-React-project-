import './App.css';
import HomePage from './user/homepage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Signin from './user/signin';
import Login from './user/login';
import Recipe from './recipe/displayRecipe';
import GetAllRecipes from './recipe/getAllRecipes';
import GetAllCategory from './category/getAllcategory'
import AddCategory from './category/addCategory';
import AddRecipe from './recipe/addRecipe';
import EditRecipe from './recipe/editRecipe';
import DeleteRecipe from './recipe/deleteRecipe';
import { useSelector } from 'react-redux';
import GetAllShoppint from './shoppingBag/getAllShoping';
import EditShoppingList from './shoppingBag/editShoppingList';
function App() {
  const user = useSelector(state => state.user)
  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        {/* <Route path="/displayRecipe" element={<Recipe />} /> */}
        <Route path="/displayRecipe" element={<Recipe />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
        <Route path="/getAllRecipes" element={<GetAllRecipes />} />
        <Route path="/getAllCategory" element={<GetAllCategory />} />
        <Route path="/addCategory" element={<AddCategory />} />
        {/* <Route path="/deleteRecipe" element={<DeleteRecipe />} /> */}
        <Route path="/edit" element={<AddRecipe />} />
        <Route path="/getAllShoping" element={<GetAllShoppint userId={user?.Id} />} />
        <Route path="/editShoppingList" element={<EditShoppingList/> } /> 

      </Routes>
    </>
  );
}

export default App;
