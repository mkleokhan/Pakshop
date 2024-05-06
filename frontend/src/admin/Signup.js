import { useState } from "react";
import SignIn from "./SignIn"
import { Link, json, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
function Signup() {
    let [user, setUser] = useState([{
        name: "",
        email: "",
        phone : "",
        password: ""
    }]);

    console.log("user before input handling",user)

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;


        setUser({
            ...user,
            [name]: value,

        })
    }

    const navigate = useNavigate();
    const {storeTokenInLs} = useAuth();
    const handleSubmit = async (event) => {
        
        event.preventDefault();
        // if (user.password.length < 8) {
        //     console.log('password must be atleast 8 characters')
        // }
        // if (user.email.length < 1) {
        //     console.log("email can't be empty")
        // }
        // if (user.name.length < 1) {
        //     console.log("Name can't be empty")
        // }
        console.log("user before sending the data to server",user)

        try {
            const responce = await fetch("http://localhost:1334/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                
                body: JSON.stringify(user), 
            });

            if(responce.status===409){
                alert('user already exists')
            }
            
            if(responce.status===200){
                alert("sign up successfull")
                const res_data = await responce.json();
                console.log("responce from server", responce)
                storeTokenInLs(res_data.token);
                navigate("/admin/SignIn")
            }
            
           
           
            console.log(responce)

        } catch (error) {
            console.log("Something went wrong in registration...", error)
        }

    }

    return (

        <div>
            <div className="container">
                <center> <h3 className="mt-3">Sign up Here...</h3></center>
                <div className="col mt-4">

                    <form className="form-control mt-3" method="post" onSubmit={handleSubmit} >
                        <label htmlFor="name" className="mt-">Name</label>
                        <input value={user.Name} id="name" onChange={handleInput}
                            className='form-control' type="text" name="name" />

                        <label htmlFor="email" className="mt-">Email</label>
                        <input value={user.email} onChange={handleInput}
                            className='form-control' type="text" name="email" id="email" />

                        <label htmlFor="phone" className="mt-">Phone Number</label>
                        <input value={user.phone} onChange={handleInput}
                            className='form-control' type="text" name="phone" id="phone" />

                        <label htmlFor="password" className="mt-">Password</label>
                        <input value={user.password} onChange={handleInput}
                            className='form-control' type="text" name="password" id="password" />

                        <button className="btn btn-primary mt-3" type="submit" >Sign up</button>
                        <div>
                            <span className="haveAccount">Already have an account???</span>
                            <Link className="linkColor" to='/admin/SignIn' >Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Signup;