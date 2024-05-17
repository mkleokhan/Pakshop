import { Link } from "react-router-dom";

import { useAuth } from "../store/auth"
import { useState, useEffect } from "react";

function Home() {
    const isLoggedIn = useAuth();
    const [categories, setCategories] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

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
        fetchCategories();
        fetchProducts();
    }, []); // Fetch categories on component mount

    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1> i will create a search bar here..</h1>
                </div>

                <div className="row ">
                    <div className="col-lg-2 mt-5">
                        <div className="navbar nav bg-success sideNav">
                            <h5>Explore Categories</h5>
                            <ul className="list-group nav">
                                {categories.map((category, index) => (
                                    <li key={index} className="nav-item ">
                                        <Link className=" whiteFontsInNav nav-link" to={`/category/${category}`}>{category}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row mt-5 ml-auto">
                        {allProducts.map((product, index) => (
    <div key={index} className="col-lg-3"> {/* Adjust the column size to accommodate 2 images per row */}
      <div className="card ">
        <div className="card-header bg-success textWhite">{product.name}</div>
        <div className="card-body  noSpace" >
          <img src={require(`./uploaded-images/${product.image}`)} alt={product.image} width={140} height={100} />
          
          <h5>Price: {product.price}</h5>  <br /><button className="btn" ><i className="fa fa-shopping-cart " ></i></button> <button className="btn"><i className="fa fa-heart " ></i></button>
          
        </div>
        <div className="card-footer bg-success textWhite">
        <h5>Description</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
    </div>
  ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;


