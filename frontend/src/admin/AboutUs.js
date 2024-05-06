import {useAuth} from '../store/auth'
function AboutUs(){
    const {user} = useAuth();
    const {isLoggedIn} = useAuth()
    return(
        <>
       <center> <h1>About Us</h1></center>
            {isLoggedIn? <h1>Hey {user.name} Welcome to Pakshop</h1> : <h1>Hey Welcome to Pakshop</h1>}
        </>
    )
}

export default AboutUs;