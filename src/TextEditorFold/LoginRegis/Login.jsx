import React, { useState } from 'react'
import './RegisterLogin.css'
import axios from 'axios'
import { NavLink,   useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const Login = () => {
    const history = useNavigate('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const { enqueueSnackbar } = useSnackbar();
    const handalFromData = (e) => {
        e.preventDefault();
        let data = {
            EmailId : email,
            Password : password,
        }
        fetchData(data)
        // console.log(data);
    }

    const fetchData = async (data) => {
        try{
            const res = await axios.post('http://localhost:2000/login/api' , data)
            if(res.data && res.status === 200){
                localStorage.setItem('TextDocxUserToken' , res.data.auth)
                localStorage.setItem('TextDocxUserEmail' , res.data.EmailId)
                localStorage.setItem('TextDocxUserName' , res.data.userDoc.Name)
                enqueueSnackbar('Registerd succesfully' , { variant: 'success' })
                setEmail('')
                setPassword('')
                history('/')
                window.location.reload();
            }else{
                enqueueSnackbar('User is not present in backend' , { variant: 'error' })
            }
        }catch(e){
            enqueueSnackbar('Somting is wrong ' , { variant: 'error' })
        }
    }
    return (<>
        <div className="container">
            <section className='d-flex align-items-center justify-content-center' style={{
                height : '80vh'
            }}>
                <form className="card p-4" onSubmit={handalFromData}>
                    <h3 className='fs-2 mb-4'>Login</h3>
                    <input type="email" id='email' value={email} placeholder='Enter EmailId..' className='w-100 mt-3 p-2' onChange={(e) => setEmail(e.target.value)}  />
                    <input type="password" id='password' value={password} placeholder='Enter Password..' className='w-100 mt-3 p-2' onChange={(e) => setPassword(e.target.value)}  />
                    <button className='btn btn-primary mt-5'>Submit</button>
                    <p className=' mt-4 fs-5'>Don't have account yet ? <NavLink to={'/register'} >Register Now</NavLink></p>
                </form>
            </section>
        </div>
    </>)
}

export default Login