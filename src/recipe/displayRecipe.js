
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect ,useState} from 'react';
import HomePage from '../user/homepage';
import { type } from '@testing-library/user-event/dist/type';
import AddProduct from '../shoppingBag/addProduct';
 import "bootstrap/dist/css/bootstrap.min.css";
 import Button from 'react-bootstrap/Button';
import Header from '../user/header';

const Recipe = () => {
   // const [count,setCount]=useState(0);
const shopping=useSelector(x=>x.shoppingRecipe);
    const navig = useNavigate()
    const dispatch = useDispatch()
    const { state } = useLocation();
    const user=useSelector(x=>x.user)
    console.log(state)
    const select = state
    console.log("dszfghjkljhgfdgh")
    console.log(select)
    const [isChecked, setIsChecked] = useState(false);

    // const Id = select.Id;
    const edit = (Id, Name) => {
        console.log("kkkkkkk")
        console.log(select)
        navig("/addRecipe", { state: { Id, select:select,Type:"Edit" } })

    }
    const Currntuser = useSelector(state => state.user)
    const id = Currntuser.Id
    console.log("aaa", Currntuser)
    const delet = (item) => {

        console.log(item)
        axios.post(`http://localhost:8080/api/bay/delete/${item.Id}`)
            .then((x) => { console.log("deleteRec",x); alert("נמחק"); 
            dispatch({ type: 'DELETE_RECIPE', Recipe: item.Id });
        })
            .catch(err => console.log(err))

           
    }
   
    const print = () => {
        window.print();
    }
  
    //ask teacher
  const AddProduct=(check, item)=>{
    
    if(check){
        // setCount(count+1)
      //  item.Count=setCount()
      //  alert(item)
        console.log(item)
        console.log("count",item.Count)
      axios.post("http://localhost:8080/api/bay", item)
      .then((x)=>{console.log(x.data);alert("   added!");})
      .catch(err=>console.log(err))       
    }
  

  }


    return (
        <>

            <div>
                <Header />
                <div className='dRcipe'>
                <h6> {select?.Name}</h6>,
                <img src={select?.Img} style={{borderRadius:"50px"}}></img>,
                <h6> דרגת קושי: {select?.Difficulty}</h6>
                <h6> משך זמן הכנה: {select?.Duration}</h6>,
                <h6> תיאור: {select?.Description}</h6>


                <br />
                <div>
                    {select?.Instructions.map(y => <p>{y}</p>)}

                </div>
                <br />
                <div>
                    {select?.Ingrident.map(v => <div>{v.Name}<br />
                      
                        < input type ="checkbox" onChange = { (e) => AddProduct(e.target.checked,{Id:v.Id,Name:v.Name,UserId:user.Id,Count:v.Count}) } />
                        {v.Count}<br />
                        {v.Type}
                    </div>)}
                </div>
            </div>
      
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {/* <button type="button" onClick={() => delet(select)}  >מחיקה</button>  */}
                       <Button  variant="outline-danger" type="button" onClick={() => print()}  >להדפסה</Button>
          <div>
          {select?.UserId === id  ? <div>
            
               <Button  variant="outline-danger" type="button" onClick={() => edit(select.Id, select.Name)}  >עריכה</Button>
                <Button variant="outline-danger" type="button" onClick={() => delet(select)}  >מחיקה</Button>
                </div> :
                    <div>
                    </div>
                }
</div>


            </div>
            </div>
        </>
    );
}
export default Recipe;


