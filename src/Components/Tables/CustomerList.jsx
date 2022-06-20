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
      customerGroup:"general",
      customerDetails:"dhiman lioncoders dhiman@gmail.com +8801111111101 kajir deuri, chittagong ,bd",
      discountPlan:"VIP plan",
      rewardPoints:11,
      depositedBalance:122,
    totalDue:2323
  },
  {
    id:2,
    customerGroup:"general",
    customerDetails:"dhiman lioncoders dhiman@gmail.com +8801111111101 kajir deuri, chittagong ,bd",
    discountPlan:"VIP plan",
    rewardPoints:11,
    depositedBalance:122,
  totalDue:2323
},
{
    id:3,
    customerGroup:"general",
    customerDetails:"dhiman lioncoders dhiman@gmail.com +8801111111101 kajir deuri, chittagong ,bd",
    discountPlan:"VIP plan",
    rewardPoints:11,
    depositedBalance:122,
  totalDue:2323
},
{
    id:4,
    customerGroup:"general",
    customerDetails:"dhiman lioncoders dhiman@gmail.com +8801111111101 kajir deuri, chittagong ,bd",
    discountPlan:"VIP plan",
    rewardPoints:11,
    depositedBalance:122,
  totalDue:2323
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

      { field: 'customerGroup', type: 'string' ,headerName:"Image"},
      { field: 'customerDetails', type: 'string' },
      { field: 'discountPlan', type: 'string' },
      { field: 'rewardPoints', type: 'number' },
      { field: 'depositedBalance', type: 'number' },
      { field: 'totalDue', type: 'number' },
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
    <div style={{ height: 500,margin:30, paddingTop:5 }}>
      <center><h2>Customer List </h2></center>
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
