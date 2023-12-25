import React, { useContext } from 'react'
import paper from '../../assets/paper.png'
import { TextContext } from '../TextContext/TextContextProvider'
import { NavLink } from 'react-router-dom'

import './SaveFile.css'

const SaveFile = () => {
    const { setSaveFile , fileList } = useContext(TextContext)
    console.log(fileList)
    return (<>
        <div className="container ">
            <section className=" ">
                <div className="row">
                {fileList && fileList.map((ele) => (
                    <div key={ele.id} className="col-2 mt-3" onClick={() => setSaveFile(ele.id)}>
                        <NavLink to={`${ele._id}`} style={{
                            textDecoration : 'none'
                        }}>
                            <div className='card w-100 theDocx d-flex align-items-center justify-content-center'>
                                <img src={paper} alt="" />
                                <h5 className='text-center'>{ele.fileName}</h5>
                            </div>
                        </NavLink>
                    </div>
                ))}
                </div>
                {!fileList && <div className='d-flex align-items-center fs-3 justify-content-center'>
                    Saved file is empty
                </div>}
            </section>
        </div>
    </>)
}

export default SaveFile