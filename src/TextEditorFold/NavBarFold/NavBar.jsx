import React , {useContext, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import save from '../../assets/save.png'
import './NavBar.css'
import logo from '../../assets/logo.png'

import { TextContext } from '../TextContext/TextContextProvider';
import TheSaveFromCard from './TheSaveFromCard';

const NavBar = () => {
    const { isTrue , setIsTrue} = useContext(TextContext)
    const location = useLocation()
    const fileId = useParams()
    return (<>
        <header>
        <Navbar className="bg-body-tertiary h-100">
            <Container>
                <Navbar.Brand>
                    <NavLink to={'/'}
                    style={{
                        color : '#000',
                        textDecoration : 'none'
                    }}
                    >
                    <div className="d-flex align-items-center gap-2 justify-content-center">
                        <img className='logo' src={logo} alt="" />
                        <p className='logoText mt-2'>Text-<span style={{
                            color : '#2356a8'
                        }}>docx</span></p>
                    </div>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <div className="d-flex align-items-center justify-content-center">
                        {
                            localStorage.getItem('TextDocxUserEmail') && (location.pathname === '/login' || location.pathname === '/register') ?
                            <div>
                            <NavLink to ='/login'><button className='btn logRegbtn'>Login</button></NavLink>
                            <NavLink to = '/register'><button className='btn btn-primary logRegbtn'>Register</button></NavLink>
                            </div>
                            :
                            <>
                            <button onClick={() => {
                                setIsTrue(!isTrue)
                            }} className=' saveBTN btn btn-primary d-flex align-items-center justify-content-center gap-3'>
                                <img  src={save} alt="" />
                            </button>
                            </>
                        }
                    </div>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
        <section className='theSaveForm w-100 d-flex align-items-center justify-content-center' style={{
            position : 'absolute',
            top : isTrue ? '0%' : '-150%',
        }}>
        <TheSaveFromCard />
        </section>
    </>)
}

export default NavBar