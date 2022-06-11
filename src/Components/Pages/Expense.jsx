import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';
import {MdOutlineImportExport} from 'react-icons/md';
import UpperNavbar from '../Navbars/UpperNavbar';
import ImportingModals from '../Modals/ImportingModals';
import { AddExpenseCategoryModal, AddExpenseModal } from '../Modals/ExpenseModal';
import ExpenseCategoryTable from "../Tables/ExpenseCategoryTable";
import Ss from '../Tables/Ss';
export const AddExpenseCategory = () => {
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
                Add Expenses Category
            </ButtonR>
            <ButtonR variant="contained" startIcon={<MdOutlineImportExport />} onClick = {() => setShowImport(!showImport)}>
                Import
            </ButtonR>
        </Stack>

        
        {/* Calling Importing Modal */}
        <ImportingModals 
        show={showImport}
        onHide = {hideModalImport}
        title = {"Import Expense's Category"}
        para = {"The correct column order is (code*, name*) and you must follow this."}
        />
        {/* Calling Add Expense Category Modal */}

        <AddExpenseCategoryModal
        show = {showAddModal}
        onHide = {hideModalAdd}
        />
        </div>
        <ExpenseCategoryTable/>
        
        {/* <Ss/> */}
        </div>
  </>)
}
export const AddExpense = () => {
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
                Add Expenses
            </ButtonR>
            <ButtonR variant="contained" startIcon={<MdOutlineImportExport />} onClick = {() => setShowImport(!showImport)}>
                Import
            </ButtonR>
        </Stack>

        
        {/* Calling Importing Modal */}
        <ImportingModals 
        show={showImport}
        onHide = {hideModalImport}
        title = {"Import Expense's Category"}
        para = {"The correct column order is (code*, name*) and you must follow this."}
        />
        {/* Calling Add Expense Category Modal */}

        <AddExpenseModal
        show = {showAddModal}
        onHide = {hideModalAdd}
        />
        </div>
        </div>
      </>)
  }
  
