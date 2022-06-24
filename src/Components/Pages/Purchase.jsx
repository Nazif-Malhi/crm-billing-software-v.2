import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';

import PurchaseForm from '../Forms/PurchaseForm'
import UpperNavbar from '../Navbars/UpperNavbar'

export const AddPurchase = () => {
  return (<>
    <UpperNavbar/>
    <div className="Forms"  style={{padding:'20px' , paddingTop:'60px'}}>
        {/* Form */}
    <PurchaseForm/>
    </div>
      
    </>)
}

export const PurchaseList = () => {
    const [showImport, setShowImport] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    function hideModalImport(){
        setShowImport(false);
    }
    function hideModalAdd(){
      setShowAddModal(false);
    }


    return(<>        <div className='main_container' style={{padding:10}}>
        <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
            <Stack spacing={2} direction="row">
                <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                    Add Purchase
                </ButtonR>
       
       </Stack>
       </div>
       </div>
       </>
    )
}