import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import {createRoot} from 'react-dom/client'
import {Box, Button, Tabs, TextField} from '@mui/material';
import DropFileBox from '../component/DropFileBox/DropFileBox';

import 'fontsource-roboto'
import './popup.css'




let last = 0;
let connectID = null;



const App: React.FC<{}> = () => {








    // We need to trigger the code to download




    return (
        <>
            <Box mx={'4px'} my={'16px'}>

                <h1 className='ext_title'>JungleScout Scrapper</h1>
                <DropFileBox/>

                <Box style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <small>No of Batches</small>


                </Box>




            </Box>
        </>
    )
}
// Create the persistence engine



const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
)


