import React, {useState, useEffect, useMemo} from 'react'
import 'fontsource-roboto'
import './DropFileBox.css'
import {FaFileCsv} from "react-icons/fa"
import {useDropzone} from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    justifyItemss: 'center',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#bdbdbd',
    borderStyle: 'dashed',
    height: '120px',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676',
    color: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744',
    color: '#ff1744'
};


const DropFileBox: React.FC<{}> = () => {
     const onDrop = async (acceptedFiles, rejection) => {



    };


    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: {'text/csv': ['.csv']},
        onDrop
    });


    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return (
        <div className="container">
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <div className={`inner-container ${isDragAccept ? acceptStyle : rejectStyle}`}>
                    <FaFileCsv className='inner-container_icon'/>
                    <p className='inner-container_text'>Select or Drop CSV File(s) to upload</p>
                </div>
            </div>
        </div>
    );
}

<DropFileBox/>


export default DropFileBox;