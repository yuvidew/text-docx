import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBarFold/NavBar';
import TextEditer from './TextEditer';
import Login from './LoginRegis/Login';
import Register from './LoginRegis/Register';
import TextContextProvider from './TextContext/TextContextProvider';
import SideNavBar from './NavBarFold/SideNavBar';
import SaveFile from './SevedFileFold/SaveFile';
import TheFile from './TheFileFold/TheFile';

const HomePage = () => {
    return (<>
    <TextContextProvider>
        <BrowserRouter>
        <div className="row">
            <div className="col-1 p-0">
                <SideNavBar/>
            </div>
            <div className="col-11 p-0" style={{
                overflowY : 'scroll'
            }}>
            <NavBar/>
            <Routes>
                <Route path='/' element = {<TextEditer/>} />
                <Route path='/login' element = {<Login/>} />
                <Route path='/register' element = {<Register/>} />
                <Route path='/folder'>
                <Route index element = {<SaveFile/>} />
                    <Route path=':page' element = {<TheFile/>} />
                </Route>
            </Routes>
            </div>
        </div>
        </BrowserRouter>
    </TextContextProvider>
    </>)
}

export default HomePage