import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import HomePage from "../user/homepage"
import Header from "../user/header"
const GetAllCategory=()=>{
  
    const [categories,SetCategories]=useState([])
    const [category, setCategory] = useState(null);
    const navig = useNavigate();
    const dispach=useDispatch();
    useEffect(()=>{
        axios.get("http://localhost:8080/api/category")
        .then(x => {
            // const newCategories = [...categories];
            SetCategories(x.data)
            console.log("a",x.data)
            dispach({type:'SET_CATEGORIES',data:x.data})
          })
          .catch(err => console.log(err))
          .finally()
    },[])
  
   

   

return (
  <>
   <Header />

  <div className="my-component">
   
    <h3 style={{ color: "rgb(232,100,100)"}} onClick={() => { dispach({ type: 'SET_CATEGORY', data: null }) }} className="bg-white text-center w-50 mx-auto mt-4 rounded-20">הכול</h3>
    {categories?.map((category) => (
      <div key={category.Id} className="w-50 mx-auto">
        <h3  style={{ color: "rgb(232,100,100)"}} onClick={() => { dispach({ type: 'SET_CATEGORY', data: category }) }} className="bg-white text-center mt-4 rounded-20 rounded-bottom-lg rounded-top-sm"
        >
         {category.Name}
        </h3>
      </div>
    ))}
  </div></>
);




 

 
};




export default GetAllCategory;