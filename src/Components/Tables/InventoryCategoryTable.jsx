import * as React from 'react';
import {useState} from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import {
  GridToolbarQuickFilter,
  GridLinkOperator,
} from '@mui/x-data-grid';

import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { MdModeEdit } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';


const initialRows = [
  {
      id:1,
    Image:'url/sd/sds',
    Category: 'Fruit',
    ParentCategory:"Food",
    NumberOfProduct:2,
    StockQuantity:2,
    StockWorth:"100pk"

  },
  {
    id:2,
  Image:'url/sd/sds',
  Category: 'Nuggeds',
  ParentCategory:"Food",
  NumberOfProduct:2,
  StockQuantity:2,
  StockWorth:"100pk"

},
];

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
        <GridToolbarExport printOptions={{ fields: ['Image','Category','ParentCategory','NumberOfProduct','StockQuantity','StockWorth'] }} />
        {/* <GridToolbarExport /> */}
      </GridToolbarContainer>
    
      </div>
    );
  }




export default function ColumnTypesGrid() {
  const [rows, setRows] = useState(initialRows);


const handleEditClick = (id) => () => {
    console.log(id+ "Edit");
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  
  const columns = React.useMemo(
    () => [

      { field: 'Image', type: 'string' ,width: 150},
      { field: 'Category', type: 'string',width: 150 },
      { field: 'ParentCategory', type: 'string' ,width: 150},
      { field: 'NumberOfProduct', type: 'number' ,width: 150},
      { field: 'StockQuantity', type: 'number' ,width: 150},
      { field: 'StockWorth', type: 'string' ,width: 150},
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 150,
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
    ]
    );

  return (
    <div style={{ height: 350, width: '100%', paddingTop:10 }}>
      
      <DataGrid columns={columns} rows={rows} 
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
    style={{width:1110}}        
      />
    </div>
  );
}
