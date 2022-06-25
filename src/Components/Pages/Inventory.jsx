import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';
import {MdOutlineImportExport} from 'react-icons/md';
import UpperNavbar from '../Navbars/UpperNavbar';
import ImportingModals from '../Modals/ImportingModals';
<<<<<<< HEAD
import { AddCategoryModal, AddProductModal, AddStockCount } from '../Modals/InventoryModals';


import AdjustmentForm from '../Forms/AdjustmentForm'


=======
import { AddCategoryModal, AddProductModal } from '../Modals/InventoryModals';
import EnhancedTable from '../Table/EnhanceTable';
import { columnsHeader , columnsHeaderProduct, rows, rowsProduct} from '../Data/TableData';
>>>>>>> 06206ad9d4ced69a88f97f427370634207850d3f


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
  
    <div className='main_container' style={{padding:10}}>
      <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
        <Stack spacing={2} direction="row">
            <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                Add Category
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
    </div>

     {/* Data Grid */}
     <div className="table" style={{width:'96%' , margin:'2%'}}>
        <EnhancedTable 
        data={rows}
        columnsHeader = {columnsHeader}
        tableTitle={"Category List"}
        />
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
      <div className='main_container' style={{padding:10}}>
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
        </div>
       {/* Data Grid */}
     <div className="table" style={{width:'96%' , margin:'2%'}}>
        <EnhancedTable 
        rows={rowsProduct}
        columnsHeader = {columnsHeaderProduct}
        />
        </div>

  </>)
}



// Stock

export const Stock = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  console.log("showAddModal " + showAddModal)

  function hideModalAdd(){
    setShowAddModal(false);
  }
return (<>
    <div className='main_container' style={{padding:10}}>
      <div  style={{paddingBottom:20,display:"flex",justifyContent:"space-between"}} >
          <Stack spacing={2} direction="row">
              <ButtonR variant="contained" startIcon={<IoMdAdd />} onClick = {() => setShowAddModal(!showAddModal)}>
                  Stock Count
              </ButtonR>

          </Stack>


           <AddStockCount 
          show= {showAddModal}
          onHide = {hideModalAdd}
          />
          </div>  
      </div>
</>)
}



//adjustment

export const Adjustment = () => {
  return (<>
    <div className="Forms"  style={{padding:'20px' , paddingTop:'60px'}}>
        {/* Form */}
    <AdjustmentForm/>
    </div>
    </>)
}
