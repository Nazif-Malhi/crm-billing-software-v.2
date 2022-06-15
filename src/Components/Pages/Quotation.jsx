import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';
import ImportingModals from '../Modals/ImportingModals';
import QuotationForm from '../Forms/QuotationForm';

export const AddQuotation = () => {
  return (<>
    <div className="Forms"  style={{padding:'20px' , paddingTop:'60px'}}>
        {/* Form */}
    <QuotationForm/>
    </div>
  </>
  )
}

export const QuotationList = () => {
    const [showImport, setShowImport] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    function hideModalImport(){
        setShowImport(false);
    }
  return (<>
  <div className='main_container' style={{padding:10}}>
        <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
            <Stack spacing={2} direction="row">
                <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                    Add Quotation
                </ButtonR>
            </Stack>
            {/* Calling Importing Modal */}
            <ImportingModals 
            show={showImport}
            onHide = {hideModalImport}
            title = {"Import Category"}
            para = {"The correct column order is (name*, parent_category) and you must follow this."}
            />
        </div>
        </div>
  
  </>
  )
}
