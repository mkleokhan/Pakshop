import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "../App.css";


function Products() {

    console.log(window.location.origin)
    const [products, setProducts] = useState([]);
    const [productImage, setProductImage] = useState();
    const [allProducts, setAllProducts] = useState([]);



    const handleChange = (e) => {
        const { name, value } = e.target;

        setProducts(prevProduct => ({
            ...prevProduct,
            [name]: value,

        }));


    };

    console.log("product before the button is clicked", products)

    // const handleFileChange = (e) => {
    //     setProducts(previousImage => ({
    //         ...previousImage,




    //     }));

    //     const file = e.target.files[0];

    //     setProductImage(file)

    // };
    const addProduct = async (e) => {
        console.log(products)
        try {
            e.preventDefault();
            console.log(productImage)
            const formData = new FormData();
            formData.append("name", products.name);
            formData.append("category", products.category)
            formData.append("image", productImage); // Append the image file to FormData

            // console.log('button is clicked: product image is', productImage)
            // console.log("FormData:", formData);

            const response = await fetch("http://localhost:1334/api/products/createProduct", {
                method: "POST",
                // headers:{'Content-Type': 'multipart/form-data'},
                body: formData // No need to set Content-Type header when using FormData
            });
            // console.log("response from server",response)
            console.log('button is clicked request is sent: product image is', productImage)
            if (response.ok) {
                // console.log(response.body)
                toast.success("Product created successfully...");
            } else {
                console.log("Response error:", response);
                if (response.status === 409) {
                    toast.error("Product Already Exists");
                }
            }
        } catch (error) {
            alert(error);
            console.log("Error:", error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:1334/api/products/allProducts", {
                method: "GET"
            });

            if (response.ok) {
                try {
                    const data = await response.json();
                    console.log("link fetch kr liya gaya he", data)
                    const products = data.Products;
                    // Log the fetched data to check its structure
                    setAllProducts(products); // Set the product state to the Products array
                    console.log(allProducts)

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
        fetchProducts();

}); // Fetch products on component mount
    return (
        <div>
            <ToastContainer />
            <div className="container">
                <div className="row">

                    <div className="col-5">
                        <h1>Add Product</h1>
                        <form onSubmit={addProduct} className="form-control">
                            <label htmlFor="productName">Product Name</label>
                            <input className="form-control" type="text" id="productName" name="name" onChange={handleChange} />
                            <label htmlFor="category">Product Category</label>
                            <input className="form-control" type="text" id="category" name="category" onChange={handleChange} />

                            <br />
                            <input onChange={(e) => setProductImage(e.target.files[0])} name="image" type="file" accept="image/*" />



                            <button className="btn btn-success" id="addButton" type="submit">Add Product</button>
                        </form>
                            
                    </div>
                    <div className="row">
  {allProducts.map((product, index) => (
    <div key={index} className="col-lg-3"> {/* Adjust the column size to accommodate 2 images per row */}
      <div className="card">
        <div className="card-header bg-success textWhite">{product.name}</div>
        <div className="card-body">
          <img src={require(`./uploaded-images/${product.image}`)} alt={product.image} width={200} height={200} />
          <h5>Description</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat minima voluptate vitae facilis labore laudantium iure eaque! Explicabo laborum autem doloremque, ipsum aperiam veritatis maxime eveniet quis reiciendis deserunt!</p>
        </div>
        <div className="card-footer bg-success textWhite">
            <h5>Price: $100</h5> <button>Buy</button> <button>Add to Cart</button> <button>Add to Favorite</button>
        </div>
      </div>
    </div>
  ))}
</div>
                        </div>
                                      
                    </div>

                </div>
          
    )
}

export default Products;
