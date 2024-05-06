import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Categories() {

    const [categories, setCategories] = useState([]);

    const [addcategory, setAddCategory] = useState({
        name: ""

    });

    const [removeCategory, setRemoveCategory] = useState({
        id: "",
        name: ""

    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setAddCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleRemoveChange = (e) => {
        const { name, value } = e.target;

        setRemoveCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const addCategory = async (e) => {




        try {
            e.preventDefault()

            const response = await fetch("http://localhost:1334/api/categories/createCategory", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(addcategory)

            })

            if (response.ok) {
                setAddCategory("");
                toast.success("Category created successfully...")
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            }
            if (!response.ok) {
                if (response.status === 409) {
                    toast.error("Category Already Exists")

                }
                console.log(response)



            }

        } catch (error) {
            alert(error)
            console.log("error", error)

        }

    }

    const deleteCategory = async (e) => {

        try {
            const categoryName = removeCategory.name; // Assuming removeCategory.name contains the category name

            const response = await fetch("http://localhost:1334/api/categories/deleteCategory" + "?" + categoryName, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: categoryName }) // Pass the category name in the request body
            });
            const data = await response.json();
            if (response.ok) {
                // Parse JSON response

                toast.success("Category Deleted Successfully"); // Access the message property from the parsed JSON data
                setTimeout(() => {

                }, 3000);
            }
            else {

                toast.error(data.message)
            }
        } catch (error) {
            console.error("Error deleting category:", error);
            toast.error("Error deleting category: " + error.message); // Display error message
            setTimeout(() => {

            }, 3000);
        }
    }

    // const fetchCategories = async(req, res)=>{

    //     try {
    //         const response = await fetch("http:localhost:1334/api/categories/allCategories",{
    //             method: "GET",

    //         });

    //         if(response.ok){
    //             console.log(response.body)

    //         }

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // Define fetchCategories as a standalone function or inside a component
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
            <ToastContainer />
            <div className="container ">
                <div className="row">

                    <div className="col-5">
                        <h1>Add category</h1>
                        <form onSubmit={addCategory} className="form-control">
                            <label htmlFor="addCategory">Add Category</label>
                            <input className="form-control" type="text" id="addCategory" name="name" onChange={handleChange} />
                            <br />
                            <button disabled={!addcategory} className="btn btn-success" id="addButton">Add Category</button>
                        </form>

                    </div>
                    <div className="col-5 ">
                        <h1>Remove Category</h1>
                        <form onSubmit={deleteCategory} className="form-control">
                            <label htmlFor="removeCategory">Remove Category</label>
                            <input className="form-control" type="text" id="removeCategory" name="name" onChange={handleRemoveChange} />
                            <br />
                            <button className="btn btn-danger">Remove Category</button>
                        </form>
                    </div>

                    <div>
                        <br />

                        <h1>Categories</h1>

                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Categories</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={index}>
                                        <td>{category}</td>
                                        <td>
                                            <Link><i className="fa fa-pencil "></i></Link>&nbsp;&nbsp;&nbsp;
                                            <Link ><i className="fa fa-trash" onClick={() => deleteCategory(category)}></i></Link>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>




                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories;