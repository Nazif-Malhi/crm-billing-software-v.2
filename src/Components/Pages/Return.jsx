import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';
import UpperNavbar from '../Navbars/UpperNavbar';
import ReturnPurchaseModals, { ReturnSalesModal } from '../Modals/ReturnModals';




export const ReturnSale = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    function hideModalAdd(){
      setShowAddModal(false);
    }

  return (<>
  <UpperNavbar/>
  <div className='main_container' style={{padding:10}}>
      <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
        <Stack spacing={2} direction="row">
            <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                Add Return Sale
            </ButtonR>
        </Stack>
        </div>
  <ReturnSalesModal
  show={showAddModal}
  onHide={hideModalAdd}
  />
  </div>
  </>
  )
}

export const ReturnPurchase = () => {
    const [showAddModal, setShowAddModal] = useState(false);
    function hideModalAdd(){
        setShowAddModal(false);
      }
    return (<>
          <UpperNavbar/>
  <div className='main_container' style={{padding:10}}>
      <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
        <Stack spacing={2} direction="row">
            <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                Add Return Purchase
            </ButtonR>
        </Stack>
        </div>
  <ReturnPurchaseModals
  show={showAddModal}
  onHide={hideModalAdd}
  />
  </div>
    </>)
  }