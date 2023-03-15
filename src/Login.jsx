import React,{useState} from 'react'
import "./Login.css"
export default function Login() {
    const [data,setdata]=useState({
        course:"",
        join:""
    })
    const [check,setcheck]=useState(false)
    const inputChange=(e)=>{
        const {name,value}=e.target;
        setdata((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
        console.log(data)
    }
  return (
    <div>
        <div className='container'>
            <div className="user-info">
                <figure>
                    <img src="cake.jpg" alt="" />
                </figure>
                <h1 className='user-name'>full Name</h1>
                <hr />
            </div>
            <div className="input-handler">
               
               <h3>Course</h3>
               <input type="text" name="course" placeholder='wirte your ans here...' onChange={(e)=> inputChange(e)}/>
               <h3>I want to join as</h3>
               <input type="text" name="join" placeholder='wirte your ans here...' onChange={(e)=> inputChange(e)}/>
               <h3>Payment structure
               <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, saepe? 
                Aperiam quaerat quam deserunt excepturi optio
                 .<a href="/">View more</a></span>
                 
               </h3>
               <p className='check-inp'> <input type="checkbox" name="check" id="check" onChange={()=> setcheck(!check)}/> I agree to apyment structure.</p>
               <button className='button'disabled={check?false:true} onClick={()=> console.log("hello")}>I Agree</button>
                
            </div>
        </div>

    </div>
  )
}
