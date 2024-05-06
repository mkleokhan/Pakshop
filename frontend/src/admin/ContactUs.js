import { useState } from "react";
import { useAuth } from "../store/auth";



function ContactUs() {
    const {isLoggedIn} = useAuth();
    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
    })

    const {user} = useAuth();
    
    

    const [userData, setUserData] = useState('true')

    if(user && userData){
        setContact({
            name: "" || user.name,
            email: "" || user.email,
            message: ''
        })
        setUserData(false)
       
    }
    
    const handleInput= (e)=>{
       
       let name = e.target.name;
        let value= e.target.value;

        setContact({
            ...contact,
            [name]: value
    })
    }

    
    const   send = async (e)=>{
        e.preventDefault();
        alert(`Name: ${contact.name} \n Email: ${contact.email} \n Message: ${contact.message}`)

        const response = await fetch("http://localhost:1334/api/contact/contact" ,{
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(contact)
        })

        if(response.ok){
           setContact("");
           console.log(contact)
           window.location.reload()
           
           
        }       
    }

    
        
    return (
        <div>
            <div className="container">
                <div className="col mt-4 ">
                    <center><h3 className="mt-4">Contact Us </h3></center>

                    {isLoggedIn? <>
                        <h1>Hey {contact.name}, Please share your thoughts with us</h1>
                        <div className="form-control">

<form  onSubmit={send}>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" className="form-control"  value={contact.name }
    />
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" className="form-control"  value={contact.email}
    />

    <label htmlFor="message">Message</label>
    <input type="text" id="message" name="message" className="form-control" onChange={handleInput}/>

    <button className="btn btn-primary mt-3" type='submit'>Send</button>

</form>

</div>

                    </>: <><h1>Sign in First...</h1></>}
                    
                </div>
            </div>
        </div>
    );
}




export default ContactUs;