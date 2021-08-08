import React from 'react'

export default function LoginPage() {
    return (
        <div>
            <h2>Login</h2>

            <form>
                <div>
                    <label>Username</label>
                    <input 
                    className={'form-control' + (submitted && !username) ? 'is-invalid': ''}
                    type="text" name="username" value="username" onChange={handleChange}/>


                    {submitted && !username && 
                    <div className="invalid-feedbavk"> Username is invalid</div>}
                    </div>


                    <div>
                    <label>Password</label>
                    <input 
                    className={'form-control' + (submitted && !username) ? 'is-invalid': ''}
                    type="password" name="password" value="password" onChange={handleChange}/>


                    {submitted && !password && 
                    <div className="invalid-feedback"> Password is invalid</div>}
                    </div>



            </form>
        </div>
    )
}
