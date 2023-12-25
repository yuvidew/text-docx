import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TextContext } from '../TextContext/TextContextProvider'

const TheFile = () => {
    const {fileList} = useContext(TextContext)
    const fileId = useParams()
    const ele = fileList.filter(ele => ele._id === fileId.page)

    
    return (<>
        <div className="container mt-3" style={{
                height : '100vh',
        }}>
            <button className='btn btn-primary fs-5' >Download</button>
            <div 
                className='p-3 mt-3'
                style={{
                overflowY : 'scroll',
                height : '90%',
                backgroundColor : '#fff'
            }}
            dangerouslySetInnerHTML={{__html:ele[0].textData}} 
            ></div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    </>)
}

export default TheFile