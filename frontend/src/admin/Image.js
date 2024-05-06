import { useState, useEffect } from "react"

const Image = ()=>
    {
        const [image, setImage] = useState([])
        const [allImages, setAllImages] = useState([])
        console.log(image)

        const  addImage= async (e)=>{
            e.preventDefault();

            const formData = new FormData();
            formData.append('image', image)

        try {
            const response = await fetch("http://localhost:1334/image/createImage", {
                method: "POST",
                body: formData
            })

            if(response.ok){
                console.log("Image added")

            }
            else{
                console.log("image not added")
            }
            
        } catch (error) {
            console.log(error)
        }

        }
        const fetchImages = async () => {
            try {
                const response = await fetch("http://localhost:1334/image/allImages", {
                    method: "GET"
                });
    
                if (response.ok) {
                    try {
                        const data = await response.json();
                        console.log("link fetch kr liya gaya he", data)
                        const images = data.Images;
                        console.log(images); // Log the fetched data to check its structure
                        setAllImages(images); // Set the product state to the Products array
                        console.log(images)
                        
                    } catch (error) {
                        console.log("error occured...")
                    }
    
                } else {
                    console.error("Failed to fetch products:", response.status);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        useEffect(() => {
            fetchImages();
        }, []); 
              return  ( 
     
     <div className="container mt-6">
            <form onSubmit={addImage} >
            <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" accept="image/*"  name = 'image' />
            <button className="btn btn-primary" >Add Image</button>
            </form>

            {
        
        allImages.map((image, index) => (
            <div key={index}>
                {/* Render content for each product */}
                
               <img  alt="" />
            </div>
            
        ))
        
    
    }
        </div>)
 console.log(image)
}

export default Image;