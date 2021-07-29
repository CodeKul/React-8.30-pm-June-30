import React, { useState } from 'react'
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"

export default function Form() {

   // props drilling and lifting state up

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        message: "",
        gender: "",
        isActive: false,
        city: ""
    })


    const handleInputChange = (e) => {
        // const name = e.name;
        // const target = e.target;
        // const value = target.value;

        setUserDetails({
           ...userDetails,
           [e.target.name]: 
           e.target.type === "checkbox" ? e.target.checked : e.target.value
           

        })
    }

    const handleSubmit = (e) => {
e.preventDefault();
setUserDetails({
    ...userDetails,
    [e.target.name]: 
    e.target.type === "checkbox" ? e.target.checked : e.target.value
    

 })


    }


    let image;

    if (userDetails.gender === "male"){
        image = <img src={img1} style={{height: "300px", width: "300px"}} alt="" />
    } else if (userDetails.gender === "female") {
        image = <img src={img2} style={{height: "300px", width: "300px"}}alt="" />

    }



    return (
        <div>
            
            <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">First Name</label>
            <input 
            type="text"
            name="firstName"
            id="firstName"
            value={userDetails.firstName}
            onChange={handleInputChange}

              /> <br />


            <label htmlFor="">Last Name</label>
            <input type="text"
             name="lastName"
             id="lastName"
             value={userDetails.lastName}
             onChange={handleInputChange} /> <br />


             <label htmlFor="">gender</label>
             <input 
             type="radio" 
             name="gender" 
             id="male"
             value= "male"
             checked={userDetails.gender === "male"}
             onChange={handleInputChange} />
             <label htmlFor="">Male</label>

             <input type="radio" 
             name="gender" 
             id="female"
             value="female"
             checked={userDetails.gender === "female"}
             onChange={handleInputChange} />
             <label htmlFor="">Female</label> <br />


             <label htmlFor="">Are you Active ?</label>
             <input type="checkbox" 
             name="isActive" 
             id="status"
             checked={userDetails.isActive}
             value={true}
             onChange={handleInputChange} /> <br />


             <label htmlFor="city">Select City</label>
             <select name="city" id="city" value={userDetails.city} onChange={handleInputChange}>
                 <option value="pune">Pune</option>
                 <option value="mumbai">Mumbai</option>
                 <option value="Nashik">Nashik</option>
                 <option value="hyderabad">Hyderabad</option>
                 <option value="banglore">Banglore</option>

             </select>







<button type="submit" onClick={handleSubmit}>Submit and View Data</button>


            </form>


{image}

            <p>{userDetails.firstName}</p>
            <p>{userDetails.lastName}</p>
            <p> Gender : {userDetails.gender}</p>
            <p>{userDetails.isActive ? "Yes" : "No"}</p>
            <p>City : {userDetails.city}</p>
        </div>
    )
}
