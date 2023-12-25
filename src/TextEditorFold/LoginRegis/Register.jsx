import React, { useState } from 'react'
import './RegisterLogin.css'
import axios from 'axios'
import { useNavigate , NavLink } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const Register = () => {
    const [email , setEmail] = useState('')
    const [password , setPasword] = useState('')
    const [name , setName] = useState('')
    const { enqueueSnackbar } = useSnackbar();
    const histry = useNavigate('')
    const handalFromData = (e) => {
        e.preventDefault();
        let data = {
            Name : name,
            EmailId : email,
            Password : password,
        }
        fetchData(data)
    }

    const fetchData = async (data) => {
        try{
            const res = await axios.post('http://localhost:2000/register/api' , data)
            if(res.data && res.status === 200){
                enqueueSnackbar('Registerd succesfully' , { variant: 'success' })
                setPasword('')
                setEmail('')
                setName('')
                histry('/login')
            }
        }catch(e){
            enqueueSnackbar('Somthing is wrong ' , { variant: 'error' })
        }
    }

    return (<>
        <div className="container">
            <section className='d-flex align-items-center justify-content-center' style={{
                height : '80vh'
            }}>
                <form className="card w-50 p-4" onSubmit={handalFromData}>
                    <h3 className='mb-4 fs-2'>Register</h3>
                    <input type="text" id = "name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name..' className='w-100 mt-3 p-2' />
                    <input type="email" id = 'email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter EmailId..' className='w-100 mt-3 p-2' />
                    <input type="password" id='password' value={password} onChange={(e) => setPasword(e.target.value)} placeholder='Enter Password..' className='w-100 mt-3 p-2' />
                    <button type='submit' className='btn btn-primary mt-5'>Submit</button>
                    <p className=' mt-4 fs-4'>Already a member ? <NavLink to={'/login'} >Login</NavLink></p>
                </form>
            </section>
        </div>
    </>)
}

export default Register