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
    Image:'ss.png',
    Name:"Adnan",
    CompanyName:"Shan Food",
    VATNumber:324342,
    Email:"xyz@gmail.com",
    Phone:8323232,
    Address:"korangi ,karachi"
},
{
    id:2,
  Image:'ss.png',
  Name:"Adnan",
  CompanyName:"Shan Food",
  VATNumber:324342,
  Email:"xyz@gmail.com",
  Phone:88323232,
  Address:"korangi ,karachi"
},
{
    id:3,
  Image:'ss.png',
  Name:"Adnan",
  CompanyName:"Shan Food",
  VATNumber:324342,
  Email:"xyz@gmail.com",
  Phone:88323232,
  Address:"korangi ,karachi"
},
{
    id:4,
  Image:'ss.png',
  Name:"Adnan",
  CompanyName:"Shan Food",
  VATNumber:324342,
  Email:"xyz@gmail.com",
  Phone:88323232,
  Address:"korangi ,karachi"
},
{
    id:5,
  Image:'ss.png',
  Name:"Adnan",
  CompanyName:"Shan Food",
  VATNumber:324342,
  Email:"xyz@gmail.com",
  Phone:88323232,
  Address:"korangi ,karachi"
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
        {/* <GridToolbarExport printOptions={{ fields: ['Image', 'Name','Code','Brand','Category','Quantity','Unit','Price','Cost','StockWorth'] }} /> */}
        <GridToolbarExport />
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

      { field: 'Image', type: 'string' ,headerName:"Image"},
      { field: 'Name', type: 'string'},
      
      { field: 'CompanyName', type: 'string' },
      { field: 'VATNumber', type: 'string' },
      { field: 'Email', type: 'string' },
      { field: 'Phone', type: 'number' },
      { field: 'Address', type: 'string' },
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
    ]
    );

  return (
    <div style={{ height: 500,margin:30, paddingTop:5}}>
      <center><h2>Supplier List </h2></center>
      <DataGrid columns={columns} rows={rows} 
      checkboxSelection
      pageSize={7}
      rowsPerPageOptions={[7]}

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
    </div>
  );
}
