import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "../user/homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import './addRecipe.css'
import Header from "../user/header";


// // export default function AddRecipe({ recipe }) {
export default function AddRecipe() {

  const { state } = useLocation(state=>state.Id)
  const  recipe1  = useLocation(s=>s?.select)
  const gg=useLocation(s=>s?.Type)
  const selectRecipe = useSelector(x => x.recipes?.find(x => x?.Id == state?.Id))
  const u=useSelector(state=>state.user)
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState('');
  const [hour, setHour] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([{ quantity: '', type: '',name:'' }]);
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState('');
  useEffect(() => {
   
 

    if (recipe1?.state?.select) {
      setName(recipe1.state?.select?.Name);
      setDifficulty(recipe1.state?.select.Difficulty);
      setHour(recipe1.state.select?.Duration);
      setInstructions(recipe1.state?.select.Instructions);
      setIngredients(recipe1.state?.select.Ingrident);
      setDescription(recipe1.state?.select.Description);
      setPhoto(recipe1.state?.select.Img);
      setCategory(recipe1.state?.select.CategoryId);
    }
  }, [recipe1?.state?.select]);

  const handleInstructionChange = (index, value) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = value;
    setInstructions(updatedInstructions);
  };
    const handleIngredientChange = (index, key, value) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index][key] = value;
      setIngredients(updatedIngredients);

    }
    ; const addInstructionField = () => {
      setInstructions([...instructions, '']);
    };
  
    const removeInstructionField = (index) => {
      const updatedInstructions = [...instructions];
      updatedInstructions.splice(index, 1);
      setInstructions(updatedInstructions);
    };
  
    const addIngredientField = () => {
      setIngredients([...ingredients, { quantity: '', type: '',name:'' }]);
    };
  
    const removeIngredientField = (index) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients.splice(index, 1);
      setIngredients(updatedIngredients);
    };

  

  const handleSubmit1 = (data) => {
    // ... your submit logic
    data.preventDefault()
    console.log("--------------7-----------------------------------------------------")
    if (gg?.state?.Type=="Edit") {
console.log("-------------------------------------------------------------------")
axios.post("http://localhost:8080/api/recipe/edit", {Id:recipe1?.state?.select.Id,
Name: name,Instructions: instructions,Difficulty: difficulty,Duration: hour,UserId:u.Id,Ingrident: ingredients, Description: description,
Img: photo,
CategoryId: category }).then()
    }
    else {
      axios.post("http://localhost:8080/api/recipe",{ Name: name, Instructions: instructions, Difficulty: difficulty, Duration: hour, UserId:u.Id, Ingrident: ingredients, Description: description,
      Img: photo,
      CategoryId: category})
        .then(x => {
          console.log(x.data)
          //3    ADD_RECIPE
       //   dispatch({ type: 'ADD_RECIPE', recipe: x.data })

        })
        .catch(err => console.log(err))
      //add
    }
  };

return (
  <>
    <Header />
    <h1 style={{ color: "rgb(232,100,100)",fontWeight:"bold",fontSize:"50px",textAlign:"center"}}>Add your Recipe</h1>
    <br/>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
   
      <form onSubmit={handleSubmit1} style={{ maxWidth: "400px" , marginBottom: "10px" }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="addR" />

        <input value={difficulty} onChange={(e) => setDifficulty(e.target.value)} placeholder="Difficulty" className="addR" />

        <input value={hour} onChange={(e) => setHour(e.target.value)} placeholder="Duration" className="addR" />

        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="addR" />

        <input value={u.Id} placeholder="userId" className="addR" />
        <br />

        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="CategoryId" className="addR" />

        <input value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Img" className="addR" />

        <label>Instructions:</label>

        {instructions?.map((instruction, index) => (
          <div key={index}>
            <input
              type="text"
              value={instruction}
              onChange={(e) => handleInstructionChange(index, e.target.value)}
              className="addR"
            />
            <button class="btn btn-danger" type="button" onClick={() => removeInstructionField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button class="btn btn-danger" type="button" onClick={addInstructionField}>
          Add Step
        </button>
        <br />
        <br />

        <label>Ingredients:</label>
        {ingredients?.map((ingredient, index) => (
          <div key={index}>
            <input
              type="number"
              value={ingredient.Count}
              placeholder="כמות"
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              className="addR"
            />
            <input
              type="text"
              value={ingredient.Type}
              placeholder=" סוג"
              onChange={(e) => handleIngredientChange(index, 'type', e.target.value)}
              className="addR"
            />
            <input
              type="text"
              value={ingredient.Name}
              placeholder="שם"
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              className="addR"
            />
            <button class="btn btn-danger" type="button" onClick={() => removeIngredientField(index)}>
              Remove
            </button>
          </div>
        ))}
        <button class="btn btn-danger" type="button" onClick={addIngredientField}>
          Add Ingredient
        </button>
        <br />

        <input type="submit" style={{ backgroundColor: "rgb(232,100,100)", borderRadius: "7px", borderColor: "white" }} />
      </form>
    </div>
  </>
);

}
