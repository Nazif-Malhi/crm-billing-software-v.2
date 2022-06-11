import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';
import {MdOutlineImportExport} from 'react-icons/md';
import UpperNavbar from '../Navbars/UpperNavbar';
import ImportingModals from '../Modals/ImportingModals';
import { AddCategoryModal, AddProductModal } from '../Modals/InventoryModals';
import ProductTable from "../Tables/ProductTable";
import InventoryCategoryTable from "../Tables/InventoryCategoryTable";


// Category 
export const Category = () => {
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
    <div className='main_container' style={{padding:40}}>
      <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
        <Stack spacing={2} direction="row">
            <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                Add Category's
            </ButtonR>
            <ButtonR variant="contained" startIcon={<MdOutlineImportExport />} onClick = {() => setShowImport(!showImport)}>
                Import
            </ButtonR>
        </Stack>

        
        {/* Calling Importing Modal */}
        <ImportingModals 
        show={showImport}
        onHide = {hideModalImport}
        title = {"Import Category"}
        para = {"The correct column order is (name*, parent_category) and you must follow this."}
        />
        {/* Calling Modal Add Category */}
        <AddCategoryModal
        show = {showAddModal}
        onHide = {hideModalAdd}
        />
      </div>
      <InventoryCategoryTable/>
    </div>
  </>)
}

// Product

export const Product = () => {
    const [showImport, setShowImport] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    console.log("showAddModal " + showAddModal)


    function hideModalImport(){
        setShowImport(false);
    }
    function hideModalAdd(){
      setShowAddModal(false);
    }
  return (<>
  <UpperNavbar/>
      <div className='main_container' style={{padding:40}}>
        <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
            <Stack spacing={2} direction="row">
                <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                    Add Product
                </ButtonR>
                <ButtonR variant="contained" startIcon={<MdOutlineImportExport />} onClick = {() => setShowImport(!showImport)}>
                    Import
                </ButtonR>
            </Stack>

            {/* Calling Importing Modal */}
            <ImportingModals
            show={showImport}
            onHide = {hideModalImport}
            title = {"Import Product"}
            para = {"The correct column order is (image, name*, code*, type*, brand, category*, unit_code*, cost*, price*, \nproduct_details, variant_name, item_code, additional_price) and you must follow this.\nTo display Image it must be stored in public/images/product directory. Image name must be same as \nproduct name"}
            />
             <AddProductModal 
            show= {showAddModal}
            onHide = {hideModalAdd}
            />
            </div>  
            <ProductTable/>           
        </div>

  </>)
}