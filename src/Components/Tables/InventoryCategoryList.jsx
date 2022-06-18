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
    Image:'ss.png',
    Name: 'Damien',
    Code: 111,
    Brand:'Lux',
    Category: 'food',
    Quantity:2,
    Unit:"kilo",
    Price:120,
    Cost:123,
    StockWorth:"100pk"

  },
  {
    id:2,
  Image:'url/sd/sds',
  Name: 'Damien',
  Code: 111,
  Brand:'Lux',
  Category: 'food',
  Quantity:2,
  Unit:"kilo",
  Price:120,
  Cost:123,
  StockWorth:"100pk"

},
{
  id:3,
Image:'url/sd/sds',
Name: 'Damien',
Code: 111,
Brand:'Lux',
Category: 'food',
Quantity:2,
Unit:"kilo",
Price:120,
Cost:123,
StockWorth:"100pk"

},
{
  id:4,
Image:'url/sd/sds',
Name: 'Damien',
Code: 111,
Brand:'Lux',
Category: 'food',
Quantity:2,
Unit:"kilo",
Price:120,
Cost:123,
StockWorth:"100pk"

},
{
  id:5,
Image:'url/sd/sds',
Name: 'Damien',
Code: 111,
Brand:'Lux',
Category: 'food',
Quantity:2,
Unit:"kilo",
Price:120,
Cost:123,
StockWorth:"100pk"

},
{
  id:6,
Image:'url/sd/sds',
Name: 'Sami',
Code: 111,
Brand:'Lux',
Category: 'food',
Quantity:2,
Unit:"kilo",
Price:120,
Cost:123,
StockWorth:"100pk"

},
{
  id:7,
Image:'url/sd/sds',
Name: 'Damien',
Code: 111,
Brand:'Lux',
Category: 'food',
Quantity:2,
Unit:"kilo",
Price:120,
Cost:123,
StockWorth:"100pk"

},
{
  id:8,
Image:'url/sd/sds',
Name: 'Damien',
Code: 111,
Brand:'Lux',
Category: 'food',
Quantity:2,
Unit:"kilo",
Price:120,
Cost:123,
StockWorth:"100pk"

},
{
  id:9,
Image:'url/sd/sds',
Name: 'Damien',
Code: 111,
Brand:'Lux',
Category: 'food',
Quantity:2,
Unit:"kilo",
Price:120,
Cost:123,
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
        <GridToolbarExport printOptions={{ fields: ['Image', 'Name','Code','Brand','Category','Quantity','Unit','Price','Cost','StockWorth'] }} />
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

      { field: 'Image', type: 'string' ,headerName:"Image"},
      { field: 'Name', type: 'string' },
      { field: 'Code', type: 'number' },
      { field: 'Brand', type: 'string' },
      { field: 'Category', type: 'string' },
      { field: 'Quantity', type: 'number' },
      { field: 'Unit', type: 'string' },
      { field: 'Price', type: 'number' },
      { field: 'Cost', type: 'number' },
      { field: 'StockWorth', type: 'string' },
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
    <div style={{ height: 580,margin:30, paddingTop:10 }}>
      <DataGrid columns={columns} rows={rows} 
      checkboxSelection
      pageSize={8}
      rowsPerPageOptions={[8]}

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
