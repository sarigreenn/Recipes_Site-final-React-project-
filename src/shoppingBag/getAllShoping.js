
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from 'axios'
import HomePage from "../user/homepage"
import { useNavigate } from "react-router"
import EditShoppingList from "./editShoppingList"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Header from "../user/header"

const GetAllShoppint = (userId) => {
  const dispatch = useDispatch();
  const navig=useNavigate()
  const shoppingList = useSelector(x => x.shoppingList)
  const user = useSelector(state => state.user)
  useEffect(() => {
    console.log(userId.userId)
    axios.get(`http://localhost:8080/api/bay/${userId.userId}`)
      .then(x => {
        console.log("למלמ", x.data)
        dispatch({ type: 'SET_SHOPPING', data: x.data });
      })
      .catch(err => console.log(err))
      .finally()
  }, [])
  const deleted = (product) => {
    axios.post(`http://localhost:8080/api/bay/delete${user.userId}`, { UserId: user.Id, Id: product.Id, Name: product.Name, Count: product.Count })
      .then(x => {
        console.log("delete")
        dispatch({ type: 'SET_SHOPPING', data: x.data });
      })
      .catch(err => console.log(err))
      .finally()
  }
  const nav=(shopping)=>{
     navig("/editShoppingList",{state:shopping})
  }
 

  return (
    <div>
      <Header />
      <div className="notpizaBackground">
        {shoppingList?.map((shopping) => (
          <p key={shopping?.Id}>
            <h2 style={{ color: "rgb(232,100,100)"}}>{shopping?.Name}</h2>
            {console.log(shopping?.Name)}
            <h3 style={{ color: "rgb(232,100,100)"}}>{shopping?.Count}</h3>
            <Button variant="outline-danger" onClick={() => deleted(shopping)}>-</Button>
            {/* <button onClick={()=>edit(shopping)}>edit</button> */}
            <Button variant="outline-danger" onClick={() => nav(shopping)}>edit</Button>

            <br />
          </p>
        ))}
      </div>
    </div>

  )
}
export default GetAllShoppint;
