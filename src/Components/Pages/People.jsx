import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';
import {MdOutlineImportExport} from 'react-icons/md';
import UpperNavbar from '../Navbars/UpperNavbar';
import ImportingModals from '../Modals/ImportingModals';
import {AddPeopleModal } from '../Modals/PeopleModals';

export const Customer = () => {
  const [showImport, setShowImport] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    function hideModalImport(){
        setShowImport(false);
    }
    function hideModalAdd(){
      setShowAddModal(false);
    }
  return (<>
  <UpperNavbar/>
  <div className='main_container' style={{padding:10}}>
      <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
        <Stack spacing={2} direction="row">
            <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                Add Customer
            </ButtonR>
            <ButtonR variant="contained" startIcon={<MdOutlineImportExport />} onClick = {() => setShowImport(!showImport)}>
                Import
            </ButtonR>
        </Stack>
        </div>
        {/* Calling Importing Modal */}
        <ImportingModals 
        show={showImport}
        onHide = {hideModalImport}
        title = {"Import Customer's"}
        para = {"The correct column order is (customer_group*, name*, company_name, email, phone_number*, address*, \ncity*, state, postal_code, country) and you must follow this."}
        />
        {/* Calling Add Customer Modal */}

        <AddPeopleModal
        show = {showAddModal}
        onHide = {hideModalAdd}
        />
        </div>
  </>
  )
}

export const Supplier = () => {
  const [showImport, setShowImport] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    function hideModalImport(){
        setShowImport(false);
    }
    function hideModalAdd(){
      setShowAddModal(false);
    }
    return(<>
<UpperNavbar/>
  <div className='main_container' style={{padding:10}}>
      <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
        <Stack spacing={2} direction="row">
            <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                Add Supplier
            </ButtonR>
            <ButtonR variant="contained" startIcon={<MdOutlineImportExport />} onClick = {() => setShowImport(!showImport)}>
                Import
            </ButtonR>
        </Stack>
        </div>
        {/* Calling Importing Modal */}
        <ImportingModals 
        show={showImport}
        onHide = {hideModalImport}
        title = {"Import Supplier's"}
        para = {"The correct column order is (name*, image, company_name*, vat_number, email*, phone_number*, address*\n, city*,state, postal_code, country) and you must follow this."}
        />
        {/* Calling Add Customer Modal */}

        <AddPeopleModal
        show = {showAddModal}
        onHide = {hideModalAdd}
        />
        </div>
    </>)
}
