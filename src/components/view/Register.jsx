import React from 'react';

const Register = () => {
    const [userRegistration,setUserRegistration] = React.useState({
        name : "",
        email : "",
        password : "",
    });
    const [records,setRecords] = React.useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({...userRegistration,[name]:value});
    }
    const handleSubmit = (e) => {
        if(userRegistration.name && userRegistration.password && userRegistration.email){
            if(userRegistration.name.length < 4){
                alert('User Name Must Contain 4 Letters:');
            }
            else if(userRegistration.password.length < 8){
                alert('Password Must Contain 8 letters:');
            }
            else{
                e.preventDefault();
                const newRecord = {...userRegistration,id : new Date().getTime().toString()}
                setRecords([...records,newRecord]);
                setUserRegistration({name:"", email:"", password:""});
            }
        }
        else{
            alert("Please enter Compelete Data:");
        }
    }
    return ( <>
                    <form action="" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div>
                    <label htmlFor = "name">Name</label>
                    <input type="text" name="name" placeholder="Enter Full Name"
                    autocomplete="off" id='name' value = {userRegistration.name} onChange={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor = "email">Email</label>
                    <input type="email" name="email" placeholder="Enter email Id"
                    autocomplete="off" id='email' value = {userRegistration.email} onChange={handleInput}
                    />
                </div>
                <div>
                    <label htmlFor = "password">Password</label>
                    <input type="password" name="password" placeholder="Password" 
                    autocomplete="off" id='password' value = {userRegistration.password} onChange={handleInput}
                    />
                </div>
                <button type="submit" id="register-btn">Registration</button>
                
                

            </form>

    </> );
}
 
export default Register;