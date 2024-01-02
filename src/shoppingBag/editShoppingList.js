

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useLocation } from "react-router"
import '../recipe/addRecipe.css'
import Header from "../user/header"
const schema = yup
    .object({
        Id: yup.string().required(),
        Name: yup.string().required(),
        Count: yup.number().positive().integer().required(),
    })
    .required()


export default function EditShoppingList() {
    const user=useSelector(state=>state.user)
  const  dispatch=useDispatch();
  const{state}=useLocation();
  const id=state.Id
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        values:{Id:id,Name:state.Name,Count:state.Count}
    })
    const onSubmit = (data) => {
        console.log("data",data)
        axios.post("http://localhost:8080/api/bay/edit", {data})
            .then(x => {
                console.log("edit")
                dispatch({ type: 'SET_SHOPPING', data: x.data });
            })
            .catch(err => console.log(err))
            .finally()
    }


   
    return (
        <>
        <Header/>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", marginBottom: "10px" }}>
       <h1 style={{ color: "rgb(232,100,100)",fontWeight:"bold",borderColor:"red",fontSize:"60px"}}>Set Your ShoppingList</h1>
            <input {...register("Id")} className="addR" />
            <p>{errors.Id?.message}</p>
      
            <input {...register("Name")} className="addR" placeholder="שם"/>
            <p>{errors.Name?.message}</p>
      
            <input {...register("Count")} className="addR" placeholder="כמות"/>
            <p>{errors.Count?.message}</p>
      
            <input type="submit" style={{ backgroundColor: "rgb(232,100,100)", borderRadius: "7px", borderColor: "white" }} />
          </form>
        </div>
        </>
      )
}