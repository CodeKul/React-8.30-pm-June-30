import React, {useState} from 'react'

export default function Form() {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })


    const getFirstName = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }


    const getUser = () => {
        console.log(user)
    }


    const handleInputChange =(e) => {
        setUser({...user, [e.target.name]: e.target.type === "radio" ? e.target.checked : e.target.value})
    }


    return (
        <div>
            
<label htmlFor="fname">First Name</label>
<input 
type="text" 
id="fname"
name="firstName"
value={user.firstName}
onChange={getFirstName}
/>

<label htmlFor="lname">Last Name</label>
<input 
type="text" 
id="lname"
name="lastName"
value={user.lastName}
onChange={getFirstName}/>

<label htmlFor="email">Email</label>
<input type="email" id="email"/>

<label htmlFor="">Gender</label>



<input 
type="radio"
name="gender"
value="male"
onChange={handleInputChange}
checked={user.gender === "male"} />
<label htmlFor="">Male</label>


<input type="radio"
name="gender"
value="female"
onChange={handleInputChange}
checked={user.gender === "female"}  />
<label htmlFor="">Female</label>

<input onClick={getUser} type="submit"  />


<p>{user.firstName}</p>
<p>{user.lastName}</p>
<p>{user.email}</p>

<p>{user.gender}</p>

        </div>
    )
}
