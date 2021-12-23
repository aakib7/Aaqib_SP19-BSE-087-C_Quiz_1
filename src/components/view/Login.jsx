import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [users,setUsers] = useState([]);

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const submitForm=(e)=>{
        if(email && password){
            if(password.length < 8){
                alert('password length must be at least 8 characters');
            }
            else{
                e.preventDefault();
                const newUser = {id: new Date().getTime().toString(), email:email, password:password}
                setUsers([...users,newUser]);
                setPassword("");
                setEmail("");
            }
            
        }
        else {
            alert("Please enter information correctly")
        }  
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <h1>Login</h1>
                <div>
                    <label htmlFor = "email">Email</label>
                    <input type="email" name="email" placeholder="Enter email Id"
                    autocomplete="off" id='email' value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor = "password  ">Password</label>
                    <input type="password" name="password" placeholder="Password" 
                    autocomplete="off" id='password' value={password}
                    onChange={handlePasswordChange}/>
                </div>
                <button type="submit" id="login-btn">Login</button>
            </form>

        </>
     );
}
 
export default Login;