import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// import image 
import dot from '../../assets/dot.png'
import page from '../../assets/page.png'
import folder from '../../assets/folder.png'
import logout from '../../assets/logout.png'

import './NavBar.css'
const SideNavBar = () => {
    const [theIndex  ,setIndex] = useState('')

    const navList = [
        {path : '/' , imgSrc : page},
        {path : '/folder' , imgSrc : folder},
    ]
    return (<>
        <header style={{
            height : '100vh',
            background : '#3d57eb',
        }}>

        <div className='d-flex m-auto w-100 align-items-center justify-content-center gap-5'>
            <img style={{
                marginLeft : '.7rem',
                width : '6rem'
            }} src={dot} alt="" />
        </div>
        <nav className=' sideBarPage h-75 mt-4'>
            {navList.map((ele , index) => (
                <div key={index} className="pageSection d-flex mt-4 align-content-center justify-content-center">
                    <NavLink to={ele.path} 
                    onClick={() => setIndex(index)} 
                    className={'d-flex align-content-center justify-content-center'}
                    style={{
                        backgroundColor : index == theIndex ? '#9aa7ed' : '',
                        width : '50%',
                        padding : '.5rem',
                        borderRadius : '.5rem'
                    }}
                    >
                        <img className=' theNaveImg object-fit-contain'  src={ele.imgSrc} alt="" />
                    </NavLink>
                </div>
            ))}
        </nav>
        <div className='h-25 '>
            <div className="pageSection d-flex mt-4 align-content-center justify-content-center">
                <button 
                    className={'d-flex btn align-content-center justify-content-center'}
                    style={{
                        width : '50%',
                        padding : '.5rem',
                        borderRadius : '.5rem'
                    }}
                    onClick={() => {
                        localStorage.removeItem('TextDocxUserToken' )
                        localStorage.removeItem('TextDocxUserEmail')
                        localStorage.removeItem('TextDocxUserName')
                        window.location.reload();
                    }}
                    >
                    <img className=' object-fit-contain' style={{
                            width : '6rem'
                    }} src={logout} alt="" />
                </button>
            </div>
        </div>
        </header>
    </>)
}

export default SideNavBar