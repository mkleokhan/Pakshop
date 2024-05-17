import { useState } from "react";
import { useAuth } from '../store/auth'
import { useEffect } from "react";

function UserProfile() {
    const { user } = useAuth();

    const [profilePic, setProfilePic] = useState(null)
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    })

    const { userData, setUserData } = useState(true)

    useEffect(() => {
        if (user) {
            setUserDetails({
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: ''
            });
        }
    }, [user]);

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(file);
        } else {
            setProfilePic(null); // Reset the state if no file is selected
        }
    };
    console.log(profilePic)
    console.log('user from auth', user)
    console.log(userDetails)

    return (
        <div>
            <div className="container">
                <center> <h3 className="mt-3">Update Profile</h3></center>
                <div className="row">
                    <div className="col-lg-4 mt-4">

                        <form className="form-control mt-3" method="post"  >
                            <label htmlFor="profilePic">Profile Pic </label>
                            <input type="file" onChange={handleFileChange} />  {profilePic && (
                                <img
                                    src={URL.createObjectURL(profilePic)}
                                    height={200}
                                    width={200}
                                    alt="Profile Pic"
                                    onLoad={() => URL.revokeObjectURL(profilePic)} // Clean up object URL
                                />
                            )}<br />

                            <label htmlFor="name" className="mt-">Name</label>
                            <input id="name"
                                className='form-control' type="text" name="name" value={userDetails.name} />

                            <label htmlFor="email" className="mt-">Email</label>
                            <input value={userDetails.email} onChange={handleInput}
                                className='form-control' type="text" name="email" id="email" />

                            <label htmlFor="phone" className="mt-">Phone Number</label>
                            <input value={userDetails.phone} onChange={handleInput}
                                className='form-control' type="tel"  maxlength="15" name="phone" id="phone" />

                            <label htmlFor="dob" className="mt-">Date of Birth</label>
                            <input onChange={handleInput}
                                className='form-control' type="date" name="dob" id="dob" max="2010-12-31" min="1940-12-31"/>

                            <label htmlFor="address" className="mt-">Address</label>
                            <input onChange={handleInput}
                                className='form-control' type="text" name="address" id="address" />

                            <button className="btn btn-primary mt-3" type="submit" >Update</button>
                            <div>

                            </div>
                        </form>
                        </div>
                        <div className="col-lg-4 mt-5">
                        <h1>
                            don't have idea that what should i do with this space right now
                        </h1>
                        </div>
                </div>

            </div>
        </div>
    )


}

export default UserProfile;