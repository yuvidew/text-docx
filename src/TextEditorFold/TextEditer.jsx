import React, { useContext, } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/react-quill'
import 'react-quill/dist/quill.snow.css';


import { TextContext } from './TextContext/TextContextProvider';

const TextEditer = () => {
    const {description , theSaveFile , setDescription , handaltheTextSubmit} = useContext(TextContext)
    // const quillRef = useRef()
    const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
        ['align', 'direction'],
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        [{ 'color': [] }, { 'background': [] }] 
    ]};
    
    const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'direction',
    'color', 'background',
    ];


    return (<>
        <section style={{
            backgroundColor : '#f3f2f3'
        }}>
            <div className="container pt-3">
                <section style={{
                    height : '83vh'
                }}>
                    <ReactQuill
                        // ref={quillRef}
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={description}
                        onChange={(html) => setDescription(html)}
                        style={{
                            height : '88vh',
                            cursor : 'text',
                        }}
                    >
                        {/* {theSaveFile && <div dangerouslySetInnerHTML={{ __html: theSaveFile }} />} */}
                    </ReactQuill>
                </section>
                <br/>
                <br/>
                <button className='btn btn-primary d-none' onClick={handaltheTextSubmit}> Submit </button>
            </div>
        </section>
    </>)
}

export default TextEditer