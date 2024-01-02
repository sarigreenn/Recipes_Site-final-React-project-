import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import {
    useLocation
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import HomePage from "../user/homepage";
import '../recipe/addRecipe.css'
import Header from "../user/header";
const schema = yup
    .object({
        Name: yup.string().required(),
    })
    .required();
const AddCategory = () => {
    <HomePage/>
    const { state } = useLocation()

    const selectCategory = useSelector(x => x.categories?.find(x => x.id == state.Id))
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
        // values: category,
    });
    const onSubmit = (data) => {
        // ... your submit logic
        console.log(data);
        axios.post("http://localhost:8080/api/category", data)
            .then(x => {
                console.log(x.data)
                dispatch({ type: 'ADD_CATEGORY', category: x.data })

            })
            .catch(err => console.log(err))

    };
    return (
      <>
      <Header/>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ textAlign: 'center' }}>
      <header />
      <h1 style={{ color: "rgb(232,100,100)",fontWeight:"bold",fontSize:"50px"}}>Name Of Category</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'fit-content' }}>
        <input {...register("Name")} className="addR" placeholder="Name" />
        <p>{errors.Name?.message}</p>
        <input type="submit" style={{ backgroundColor: "rgb(232,100,100)", borderRadius: "7px", borderColor: "white" }} />
      </form>
    </div>
  </div>
  </>
    );
}


export default AddCategory;