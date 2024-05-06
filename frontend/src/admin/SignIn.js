import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../store/auth';


function SignIn(){

    const [user,setUser] = useState({
        email:"",
        password: ""
    })
    const handleInput=(e)=>{
        let name = e.target.name;
        let value= e.target.value;

        

        setUser({
            ...user,
            [name]:value
        })
    }
const navigate =  useNavigate()
const {storeTokenInLs} = useAuth();
    const loginUser= async (e)=>{
        
        e.preventDefault();
        console.log(user)
       const response = await fetch("http://localhost:1334/api/auth/login",{
            method: "POST",
            headers:{"Content-Type": "application/json",},
            body: JSON.stringify(user)
        })

        if(response.ok){
            const res_data = await response.json();
            
            storeTokenInLs(res_data.token)
            setUser({email: "", password:""})
            navigate("/admin/Home")
            
            
            window.location.reload();
            
        }
        else{
            alert("login failed")
        }
       }
    
    return(
        <div>
            <div className="container">
            <div className="col mt-4 ">
            <center><h3 className="mt-4">Sign in here </h3></center>
            <div className="form-control">
            
            <form onSubmit={loginUser} >
                 <label htmlFor="userName/email">Email/UserName</label>
                 <input type="email" placeholder="Enter your userName/email"  id="userName/email" name="email" className="form-control"
                 value={user.email} onChange={handleInput} />
                 <label htmlFor="password">Password</label>
                 <input type="text" placeholder="Enter your password"  id="password" name="password" className="form-control" 
                 value={user.password} onChange={handleInput} />
                
                 <button className="btn btn-primary mt-3" type='submit'>Sign In</button>
                 
             </form>
             <span className="dontHaveAcount">Dont have an Account???</span>
                    <Link className="linkColor" to='/admin/Signup' > Sign up Here</Link>
            </div>
           
                </div>
                </div>

                

                        
                </div>
    );
}

export default SignIn;