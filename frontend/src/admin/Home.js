// import { Link } from "react-router-dom";
// import red from '../includes/images/redTeddy.jpeg'
// import {useAuth} from "../store/auth"
// import { useState, useEffect } from "react";
// function Home(){
// const isLoggedIn = useAuth();

// const [categories, setCategories] = useState([]);

// const fetchCategories = async () => {
//     try {
//         const response = await fetch("http://localhost:1334/api/categories/allCategories", {
//             method: "GET"
//         });

//         if (response.ok) {
//             const data = await response.json();
//             setCategories(data.Categories);
//             console.log(data); // Log the fetched categories
//             return data; // Return the fetched categories for further processing if needed
//         } else {
//             console.error("Failed to fetch categories:", response.status);
//             return null;
//         }
//     } catch (error) {
//         console.error("Error fetching categories:", error);
//         return null;
//     }
// };
// useEffect(() => {
//     fetchCategories();
// }, []); // Fetch categories on component mount

// // console.log(isLoggedIn)
//     return(
        
//      <div>
//         <div className="container">
//        <div className="row">
//         <h1> i will create a search bar here..</h1>
//        </div>

//        <div className="row">
//             <div className="col-lg-3">
//                <nav className="navbar navbar-lg ">
               
//                {/* HERE!!!!!!!! */}
//                <ul className="list-group list-group-flush">
//     {categories.map((category, index) => (
//         <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//             {category}
            
                
            
//         </li>
//     ))}
// </ul>

//                </nav>
//             </div>
//             <div className="col-lg-8">
              
//                  <div className="row mt-5 ml-auto">
//                     <div className="col-lg-4">                    
//                         <div className="card products">
//                         <div className="card-header">
//                                 <div className="card-body">
//                                     <img src={red} alt="image" />
//                                     <span>Teddy Bear</span>
//                                 </div>
//                             </div>
//                         </div>     
                                                   
//                         </div> 
//                         <div className="col-lg-4">                    
//                         <div className="card products">
//                         <div className="card-header">
//                                 <div className="card-body">
//                                     <img src={red} alt="image" />
//                                 </div>
//                             </div>
//                         </div>     
                                                   
//                         </div> 
//                         <div className="col-lg-4">                    
//                         <div className="card products">
//                         <div className="card-header">
//                                 <div className="card-body">
//                                     <img src={red} alt="image" />
//                                 </div>
//                             </div>
//                         </div>     
                                                   
//                         </div> 
//                         <div className="col-lg-4">                    
//                         <div className="card products">
//                         <div className="card-header">
//                                 <div className="card-body">
//                                     <img src={red} alt="image" />
//                                 </div>
//                             </div>
//                         </div>     
                                                   
//                         </div> 
//                         <div className="col-lg-4">                    
//                         <div className="card products">
//                         <div className="card-header">
//                                 <div className="card-body">
//                                     <img src={red} alt="image" />
//                                 </div>
//                             </div>
//                         </div>     
                                                   
//                         </div> 
//                         <div className="col-lg-4">                    
//                         <div className="card products">
//                         <div className="card-header">
//                                 <div className="card-body">
//                                     <img src={red} alt="image" />
//                                 </div>
//                             </div>
//                         </div>     
                                                   
//                         </div> 
                        
                        
//                     </div>
                    
//             </div>

//         </div>
//         </div>
//      </div>
//     )
// }


// export default Home;

import { Link } from "react-router-dom";
import red from '../includes/images/redTeddy.jpeg'
import { useAuth } from "../store/auth"
import { useState, useEffect } from "react";

function Home() {
    const isLoggedIn = useAuth();
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch("http://localhost:1334/api/categories/allCategories", {
                method: "GET"
            });

            if (response.ok) {
                const data = await response.json();
                setCategories(data.Categories);
                console.log(data); // Log the fetched categories
                return data; // Return the fetched categories for further processing if needed
            } else {
                console.error("Failed to fetch categories:", response.status);
                return null;
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            return null;
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []); // Fetch categories on component mount

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1> i will create a search bar here..</h1>
                </div>

                <div className="row">
                    <div className="col-lg-3">
                        <nav className="navbar navbar-lg ">
                            {/* Render categories as clickable links */}
                            <ul className="list-group list-group-flush">
                                {categories.map((category, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to={`/category/${category}`}>{category}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-8">
                        <div className="row mt-5 ml-auto">
                            {/* Render product cards */}
                            {/* Your product card rendering code */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;


