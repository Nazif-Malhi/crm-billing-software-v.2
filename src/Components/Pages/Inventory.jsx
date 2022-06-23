import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import {IoMdAdd} from 'react-icons/io';
import {MdOutlineImportExport} from 'react-icons/md';
import ImportingModals from '../Modals/ImportingModals';
import { AddCategoryModal, AddProductModal } from '../Modals/InventoryModals';
import EnhancedTable from '../Table/EnhanceTable';


// Data for Category

function createData(imagePath,	Category,	ParentCategory,	NumofProduct,	Stock, Quantity,Worth) {
  return { imagePath,	Category,	ParentCategory,	NumofProduct,	Stock, Quantity,Worth };
}

const rows = [
  createData('Cupcake', 305, 3.7, 305, 3.7, 305, 3.7),
  createData('Donut', 452, 25.0,305, 3.7, 305, 3.7, 305, 3.7,305, 3.7),
  createData('Eclair', 262, 16.0,305, 3.7, 305, 3.7, 305, 3.7,305, 3.7),
  createData('Frozen yoghurt', 159, 6.0,305, 3.7, 305, 3.7, 305, 3.7,305, 3.7),
  createData('Gingerbread', 356, 16.0,305, 3.7, 305, 3.7, 305, 3.7,305, 3.7),
  createData('Honeycomb', 408, 3.2,305, 3.7, 305, 3.7, 305, 3.7,305, 3.7),
  createData('Ice cream sandwich', 237, 9.0,305, 3.7,305, 3.7, 305, 3.7, 305, 3.7),
  createData('Jelly Bean', 375, 0.0,305, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
  createData('KitKat', 518, 26.0, 305, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
  createData('Lollipop', 392, 0.2,305, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
  createData('Marshmallow', 318, 0,305, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
  createData('Nougat', 360, 19.0,305, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
  createData('Oreo', 437, 18.0,305, 3.7, 305, 3.7, 305, 3.7, 305, 3.7),
]
// .sort((a, b) => (a.calories < b.calories ? -1 : 1));

const columns = [
  'Image',
  'Category',
  'Parent Category',
  'Number of Product',
  'Stock',
  'Quantity',
  'Worth (Price/Cost)'
]

const keyColumn = [
  'imagePath',	'Category',	'ParentCategory',	'NumofProduct',	'Stock', 'Quantity','Worth'
]
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
    </div>

     {/* Data Grid */}
     <div className="table" style={{width:'96%' , margin:'2%'}}>
        <EnhancedTable 
        rows={rows}
        columns = {columns}
        keyColumn = {keyColumn}
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
       

  </>)
}