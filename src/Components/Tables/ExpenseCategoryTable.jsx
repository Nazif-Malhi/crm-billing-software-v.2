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
    code:232,
    name:"Adnan"
  },
  {
    id:2,
    code:235,
    name:"Sami"
  
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
        <GridToolbarExport printOptions={{ fields: ['code','Name'] }} />
      </GridToolbarContainer>
    
      </div>
    );
  }





export default function ColumnTypesGrid() {
  const [total, setTotal] = React.useState(0);
  const [rows, setRows] = useState(initialRows);


const handleEditClick = (id) => () => {
    console.log(id+ "Edit");
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const columns = React.useMemo(
    () => [

      { field: 'code', type: 'number' ,headerName:"Code",width: 250},
      { field: 'name', type: 'string' ,headerName:"Name",width: 250},
      
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
