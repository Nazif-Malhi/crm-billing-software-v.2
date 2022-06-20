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
import Avatar from '@mui/material/Avatar'

const initialRows = [
  {
      id:1,
    Code: 111,
    Name: 'Damien',

  },
  {
    id:2,
  Code: 111,
  Name: 'Damien',

},
{
  id:3,
Code: 111,
Name: 'Damien',

},
{
  id:4,
Code: 111,
Name: 'Damien',

},
{
  id:5,
Code: 111,
Name: 'Damien',

},
{
  id: 111,

Name: 'Sami',
Code: 111
},
{
  id:7,
Code: 111,
Name: 'Damien',

},
{
  id:8,
Code: 111,
Name: 'Damien',

},
{
  id:9,
Code: 111,
Name: 'Damien',

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
        <GridToolbarExport printOptions={{ fields: [ 'Name','Code'] }} />
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
      { field: 'Code', type: 'number' },
      { field: 'Name', type: 'string' },
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
    <div style={{ height: 500,margin:30,width:500, paddingTop:5 }}>
      <center><h2>Inventory Product List </h2></center>
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
