import {createContext, useContext, useEffect, useState} from "react";

export const  AuthContext = createContext();

export const AuthProvider  = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem('token'))
    const [user, setUser] = useState();
    
    
 
    const storeTokenInLs = (serverToken) =>{
        return localStorage.setItem('token', serverToken)
        

    }
   
    let isLoggedIn = !!token;
   
    
    //log out functionality
    const logOutUser = ()=>{
        setToken("");
        return localStorage.removeItem('token')
      }

      const getData = async ()=>{
        try {
            const responce = await fetch("http://localhost:1334/api/auth/user",{
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
            });
            
            
  
            if(responce.ok){
               const  data = await  responce.json();
              
                setUser(data)
                
           }
        } catch (error) {
            console.log('Cannot connect to server\nError:', error)
        }

       
    }
    useEffect(()=>{
        getData();
    }, [])
   
    return (<AuthContext.Provider value ={{isLoggedIn, storeTokenInLs, logOutUser, user}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () =>{

    const authContext = useContext(AuthContext);
    if(!authContext){
        throw new Error("useAuth Context Properly")
    }
    return authContext
}