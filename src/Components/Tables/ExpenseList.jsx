import * as React from 'react';
import Box from '@mui/material/Box';
import { GridToolbarContainer, GridToolbarExport,GridToolbarQuickFilter, GridLinkOperator, } from '@mui/x-data-grid';
import {useState} from 'react';

import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';

import { MdModeEdit } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';





function QuickSearchToolbar() {
    return (
      <div style={{display: "flex", justifyContent:"space-between"}} > 
      <GridToolbarQuickFilter 
        style={{minWidth:500}}
          quickFilterParser={(searchInput) =>
            searchInput
              .split(',')
              .map((value) => value.trim())
              .filter((value) => value !== '')
          }
        />
      <GridToolbarContainer>
        {/* <GridToolbarExport printOptions={{ fields: ['Image', 'Name','Code','Brand','Category','Quantity','Unit','Price','Cost','StockWorth'] }} /> */}
        <GridToolbarExport />
      </GridToolbarContainer>
    
      </div>
    );
  }


const getCellClassName = ({ row, field }) => {
  if (row.id === 'SUBTOTAL' || row.id === 'TOTAL' || row.id === 'TAX') {
    if (field === 'item') {
      return 'bold';
    }
  }
  return '';
};

export default function ColumnSpanningFunction() {
    
const [rowItems, setRows] = useState(items);
const [total, setTotal] = useState(0);

const calTotal=()=>{
  let result=0;
  // let ss=items.map(row=> result+=row.quantity).pop();
  // console.log(ss);
 let val= items.map(row=> result+=row.quantity)
    return setTotal(val.pop());
    
}


// calTotal();
const handleEditClick = (id) => () => {
    console.log(id+ "Edit");
  };

  const handleDeleteClick = (id) => () => {
    setRows(rowItems.filter((row) => row.id !== id));
  };

    
    const items = [
        { id: 1, item: 'Paperclip', quantity: 100, price: 1.99 },
        { id: 2, item: 'Paper', quantity: 10, price: 30 },
        { id: 3, item: 'Pencil', quantity: 100, price: 1.25 },
      ];
      const rows = [
        ...items,
        { id: 'total', label: 'Total', total:total},
      ];
      
      const baseColumnOptions = {
        sortable: false,
        pinnable: false,
        hideable: false,
      };
      
      const columns = [
        {
          field: 'item',
          headerName: 'Item/Description',
          ...baseColumnOptions,
          flex: 3,
          colSpan: ({ row }) => {
            if (row.id === 'total') {
              return 3;
            }
            return undefined;
          },
          valueGetter: ({ value, row }) => {
            if (row.id === 'total') {
              return row.label;
            }
            return value;
          },
        },
        {
          field: 'quantity',
          headerName: 'Quantity',
          ...baseColumnOptions,
          flex: 1,
          sortable: false,
          valueGetter: ({ value,row }) => {
                 if (row.id === 'total') {
                   return total;
                 }
                 return value;
                }
        },
        {
          field: 'price',
          headerName: 'Price',
          flex: 1,
          ...baseColumnOptions,
          valueGetter: ({ row, value }) => {
            if (row.id === 'TAX') {
              return `${row.taxRate}%`;
            }
            return value;
          },
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
      
              return [
                <GridActionsCellItem
                  icon={<MdModeEdit style={{color:"gray"}} />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleEditClick(id)}
                  
                  color="inherit"
                />,
                <GridActionsCellItem
                  icon={<AiOutlineDelete  style={{color:"gray"}}/>}
                  label="Delete"
                  onClick={handleDeleteClick(id)}
                  color="inherit"
                />,
              ];
            },
        }
    
        
      ];
      


    return (
    <Box
      sx={{
        width: '100%',
        '& .bold': {
          fontWeight: 600,
        },
      }}
    >
      <DataGrid
        autoHeight
        disableExtendRowFullWidth
        disableColumnFilter
        disableSelectionOnClick
        hideFooter
        showCellRightBorder
        showColumnRightBorder
        getCellClassName={getCellClassName}
        columns={columns}
        rows={rows}
        checkboxSelection
      pageSize={5}
      rowsPerPageOptions={[5]}

      initialState={{
        filter: {
          filterModel: {
            items: [],
            quickFilterLogicOperator: GridLinkOperator.Or,
          },
        },
      }}
        components={{ Toolbar: QuickSearchToolbar }}

      />
    </Box>
  );
    }
