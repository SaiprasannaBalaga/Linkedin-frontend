// import React, { useState } from 'react'

// import '../styles/Login.css';

// function Login() {
//   const [data, setdata] = useState({
//     Username: "",
//     password: "",

//   })

//   const { Username, password } = data;


//   const changeHandler = e => {
//     setdata({ ...data, [e.target.name]: [e.target.value] })
//   }

//   const submitHandler = e => {
//     e.preventDefault();
//     console.log(data);
//   }
//   return (
//     <div className='Logindiv'>
//       <form onSubmit={submitHandler}>
//         <div className='logo'>
//           <img src='https://tse2.mm.bing.net/th?id=OIP.mUd7Q5MynZKUIEpz-YgRRAHaCR&pid=Api&P=0&h=180' />
//         </div>

//         <div className='inputss'>
//           <h3>Login</h3>
//           <input type='text' name='Username' placeholder='Username' onChange={changeHandler} value={Username} /> <br />
//           <input type='password' name='password' placeholder='password' onChange={changeHandler} value={password} /> <br />
//           <button>Login</button> <br />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Login;



import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {Col, Row, Form, FormGroup, Input, Label, Button} from "reactstrap";
import { login } from "../redux/slices/Userslice";
import { Link, useNavigate} from "react-router-dom"

const Login = () => {
    const [userDetails, setUserDetails] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        dispatch(login({userDetails, navigate}))
    };
    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="avc@xyz.com"
                        type="email"
                        value={userDetails.email}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, email: e.target.value })}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="********"
                        type="password"
                        value={userDetails.password}
                        onChange={(e) =>
                            setUserDetails({ ...userDetails, password: e.target.value })}
                    />
                </FormGroup>
                
                <Button
                    outline={true}
                    block={true}
                    color="primary"
                    onClick={(e) => handleSubmit(e)}
                >
                    Login
                </Button>
            </Form>
            <br />
            <a>Don't have an account <Link to={"/register"}>Register</Link></a>
        </>
    )
}
export default Login;
