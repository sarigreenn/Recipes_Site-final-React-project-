
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useDispatch } from "react-redux"
import axios from "axios"
import HomePage from "./homepage"
import { useNavigate } from "react-router-dom"
import { BsPersonFill } from 'react-icons/bs';
import { FaLock, FaUserAlt, FaPhoneAlt, FaEnvelope, FaIdCard } from 'react-icons/fa';

const schema = yup.object({
  Username: yup.string().required(),
  Password: yup.number().positive().integer().required(),
  Name: yup.string().required(),
  Phone: yup.number().positive().integer().required(),
  Email: yup.string().email(),
  Tz: yup.number().positive().integer()
})
  .required()


export default function Login() {
  const navig = useNavigate();
  <HomePage />
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // values:user
  })
  const onSubmit = (data) => {
    console.log(data);



    axios.post("http://localhost:8080/api/user/sighin", { Username: data.Username, Password: data.Password, Name: data.Name, Phone: data.Phone, Email: data.Email, Tz: data.Tz })
      .then(x => {
        console.log(x.data)
        dispatch({ type: 'SET_USER', user: x.data })
        navig("/Signin")
      })
      .catch(err => console.log(err))
  }


  return (
    <>
     <div className="si">
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center vh-100">
        <h1 style={{ color: "white", fontSize: "4rem", fontWeight: "bold" }}>Login</h1>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <BsPersonFill />
          </span>
          <input
            {...register("Username")}
            placeholder="Username"
            className="form-control"
            style={{ color: "rgb(162, 8, 8)", borderColor: "white" }}
          />
        </div>
        <p>{errors.Username?.message}</p>
  
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaLock />
          </span>
          <input
            {...register("Password")}
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </div>
        <p>{errors.Password?.message}</p>
  
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaUserAlt />
          </span>
          <input
            {...register("Name")}
            placeholder="Name"
            className="form-control"
          />
        </div>
        <p>{errors.Name?.message}</p>
  
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaPhoneAlt />
          </span>
          <input
            {...register("Phone")}
            placeholder="Phone"
            className="form-control"
          />
        </div>
        <p>{errors.Phone?.message}</p>
  
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaEnvelope />
          </span>
          <input
            {...register("Email")}
            placeholder="Email"
            className="form-control"
          />
        </div>
        <p>{errors.Tz?.message}</p>
  
        <div className="input-group mb-3">
          <span className="input-group-text">
            <FaIdCard />
          </span>
          <input
            {...register("Tz")}
            placeholder="Identity"
            className="form-control"
          />
        </div>
        <p>{errors.Tz?.message}</p>

<button type="submit" className="btn btn-primary">
  Login
</button>
</form>
</div>
</>
);
}