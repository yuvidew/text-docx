import React, { createContext  , useState , useEffect} from 'react'
import axios from 'axios';
import { useSnackbar } from 'notistack'

export const TextContext = createContext()

const TextContextProvider = (props) => {
    const [description , setDescription] = useState('')
    const [theSaveFile , setSaveFile] = useState()
    const [fileList , setFileList] = useState([])
    const [isTrue , setIsTrue] = useState(false)
    const token = localStorage.getItem('TextDocxUserEmail')
    const { enqueueSnackbar } = useSnackbar();

    

    const handaltheTextSubmit = async (fileName) => {
        try{
            const res = await axios.post('http://localhost:2000/post/api', {
                content : description,
                userToken : token,
                fileName : fileName,
            });
            console.log(res)
            if(res.data){
                setDescription('')
                enqueueSnackbar('file is save succesfully' , { variant: 'success' })
                setIsTrue(!isTrue)
                window.location.reload();
            }else{
                enqueueSnackbar('Somthing' , { variant: 'success' })
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect( () => {
        const findUserDocx =  async () =>{
            const res = await axios.post('http://localhost:2000/user/textdocx/api' , {
                userToken  : token,
            })
            setFileList(res.data);
        }

        findUserDocx()
    },[])

    const contextValue = {
        handaltheTextSubmit , 
        description , 
        setDescription,
        theSaveFile , 
        setSaveFile,
        fileList , 
        setFileList,
        isTrue , 
        setIsTrue
    }
    return (<>
        <TextContext.Provider value = {contextValue}>
        {props.children}
        </TextContext.Provider>
    </>)
}

export default TextContextProvider