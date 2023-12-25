import React, { useState  , useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TextContext } from '../TextContext/TextContextProvider';

const TheSaveFromCard = () => {
    const { handaltheTextSubmit} = useContext(TextContext)
    const [fileName , setFileName] = useState('')
    return (<>
        <Card >
            <Card.Header className=' fs-2 text-center'>Save the file </Card.Header>
            <Card.Body>
            <Card.Title className='fs-3'>File name : </Card.Title>
            <Card.Text className='w-100 mt-4 mb-3 d-block'>
                <input type="text" name=""  id="theInputText" onChange={(e) => setFileName(e.target.value)} />
            </Card.Text>
            <Button variant="primary" className='mt-3' onClick={() => handaltheTextSubmit(fileName)}>Save</Button>
            </Card.Body>
        </Card>
    </>)
}

export default TheSaveFromCard