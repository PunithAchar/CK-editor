import React,{useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ReactHtmlParser from 'html-react-parser'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Ckeditor=()=>{
    const [addData, setVal]=useState("");
    const [addedData, showData]= useState(0);
    const handleChange =(e, editor)=>{
        const data= editor.getData();
        setVal(data)
    }
    return(
        <div >
        <h2>
            CKEditor
        </h2>
        <div>
            <div>
                <button onClick={()=>showData(!addedData)}>{addedData ? 'hide Data' : 'show Data'}</button>
            </div>
        </div>
         <CKEditor editor={ClassicEditor} data={addData} onChange={handleChange} />
         <div>
            {addedData ? ReactHtmlParser(addData) : ''}
         </div>
        </div>
    );
}

export default Ckeditor
