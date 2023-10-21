import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import postLogin from "../api/post-login.js";
// import useAuth from "../hooks/use-auth.js";
import "./LoginForm.css";

function LoginForm() {    
    // const navigate = useNavigate();
    // const {auth, setAuth} = useAuth();    
    
    const [credentials, setCredentials] = useState({        
        username: "",        
        password: "",    
    });    
    
    const handleChange = (event) => {        
        const { id, value } = event.target;        
        setCredentials((prevCredentials) => ({            
            ...prevCredentials,            
            [id]: value,        
        }));    
    };    
    
//     const handleSubmit = (event) => {        
//         event.preventDefault();        
//         if (credentials.username && credentials.password) {            
//             postLogin(                
//                 credentials.username,                
//                 credentials.password            
//                 ).then((response) => {                
//                     window.localStorage.setItem("token", response.token);
//                     setAuth({                   
//                         token: response.token,               
//                     });                
//                     navigate("/");            
//                 });        
//             }    
//         };

    return (
        <form>
            <h1>Login</h1>
            <div className="text-field-style">
                <label htmlFor="email" className="row">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="Enter email"
                            onChange={handleChange}
                        />       
                </div>
                <div className="text-field-style">
                    <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            placeholder="Enter username"
                            onChange={handleChange}
                        />  
                </div> 
                <div className="text-field-style">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter password" 
                    />      
                </div>
                <div className="button-style">
                <button type="submit"><span>Login</span></button>  
                </div>
        </form>
    );
}

export default LoginForm;