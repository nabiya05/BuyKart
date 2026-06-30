import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const navigate = useNavigate();

    const onSubmit = async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post("https://buykartproject.onrender.com/user/login",{username,password});
            alert("login successfull")
            navigate("/");
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <form onSubmit={onSubmit} style={{height:"600px", width:"700px", marginLeft:"300px"}}>
            
           <Form.Label htmlFor="inputPassword5">username</Form.Label>
           <Form.Control  type="text" placeholder='enter username' onChange={(e)=>setUsername(e.target.value)} value={username} id="inputPassword5" aria-describedby="passwordHelpBlock" />
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
           <Form.Control type="password" placeholder='enter password' onChange={(e)=>setPassword(e.target.value)} value={password} id="inputPassword5" aria-describedby="passwordHelpBlock" />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text><br/>
            <Button variant="primary" type='submit'>Submit</Button>

        </form>
    </div>
  );
}

export default Login;
