function user (){
    return(
        <div>
             <div className="container">
                <center> <h3 className="mt-3">Update Profile</h3></center>
                <div className="col mt-4">

                    <form className="form-control mt-3" method="post"  >
                        <label htmlFor="name" className="mt-">Name</label>
                        <input value={user.Name} id="name" 
                            className='form-control' type="text" name="name" />

                        <label htmlFor="email" className="mt-">Email</label>
                        <input value={user.email} 
                            className='form-control' type="text" name="email" id="email" />

                        <label htmlFor="phone" className="mt-">Phone Number</label>
                        <input value={user.phone} 
                            className='form-control' type="text" name="phone" id="phone" />

                        <label htmlFor="password" className="mt-">Password</label>
                        <input value={user.password} 
                            className='form-control' type="text" name="password" id="password" />

                        <button className="btn btn-primary mt-3" type="submit" >Sign up</button>
                        <div>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default user;