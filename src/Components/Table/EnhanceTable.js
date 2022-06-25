import * as React from 'react';
import { styled , alpha} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';


// Importing Icons 

import {MdFirstPage , MdLastPage, MdOutlineModeEditOutline, MdDelete} from 'react-icons/md';
import {AiOutlineRight , AiOutlineLeft, AiOutlineDown} from 'react-icons/ai'


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";


//Print
import {useReactToPrint} from "react-to-print";
import { useRef } from 'react';

//export to csv
// import { useTable } from "react-table";
import { CSVLink } from "react-csv";



// Custom Theme 
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



// Data

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const data = [
  createData('Cupcake', 305, 3.7),
  createData('Donut', 452, 25.0),
  createData('Eclair', 262, 16.0),
  createData('Frozen yoghurt', 159, 6.0),
  createData('Gingerbread', 356, 16.0),
  createData('Honeycomb', 408, 3.2),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Jelly Bean', 375, 0.0),
  createData('KitKat', 518, 26.0),
  createData('Lollipop', 392, 0.2),
  createData('Marshmallow', 318, 0),
  createData('Nougat', 360, 19.0),
  createData('Oreo', 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));



// Pagination

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <MdLastPage /> : <MdFirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <AiOutlineRight /> : <AiOutlineLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <AiOutlineLeft /> : <AiOutlineRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <MdFirstPage /> : <MdLastPage />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

// Align was not correct of p in Table Pagination

const CustomPaginationStyle = styled(TablePagination)`
p{
  margin:auto;
}
`;

//// For Action Button 
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));
function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<AiOutlineDown />}
        size='small'
      >
        Options
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <MdOutlineModeEditOutline style={{marginRight:'10px'}}/>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MdDelete style={{marginRight:'10px'}}/>
          Duplicate
        </MenuItem>
      </StyledMenu>
    </div>
  );
}



///// Search bar

const SearchBar = ({setSearchQuery}) => (
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom:3 }}>
        {/* <BiSearch sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
        
          <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            label="Search ..."
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
        </Box>
 
);

const filterData = (query, rows) => {
  if (!query) {
    return rows;
  } else {
    return rows.filter((d) => d.name.toLowerCase().includes(query));
  }
};

//// end Search



export default function EnhanceTable({
  rows,
  columnsHeader
}) {

  // pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rowData, setRows] = React.useState(data);
  
  /// Print 
  let printRef= useRef();
  const handlePrint=useReactToPrint({content:()=>printRef.current});
    
  
//Export CSV
const dataToCSV = React.useMemo(() => {
  let columns=["Dessert (100g serving)", "Calories", "Fat (g)"]
  let rowsWithHeader=[columns, ...rowData];
  return rowsWithHeader.map((d) => Object.values(d));
}, []);


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  // Calculating the Total in Data Grid
  function getTotal(){
    var total = 0;
    rows.forEach(element => {
      total += element.calories
    });
    return total;
  }

// search 

const [searchQuery, setSearchQuery] = React.useState("");
const dataFiltered = filterData(searchQuery, rowData);

const csvBtn= {
  textDecoration:"none",
  border:"1px  solid #8fbce9",
  borderRadius:"5px " ,
  alignItems:"baseline",
  color:"#2f76d2",
  paddingBottom:"10px"

};
function getColumnsHeader () {
  return columnsHeader.slice(1).map((data) =>{
    return <StyledTableCell align="right">{data}</StyledTableCell>
  })
}


  return (<>
    <div style={{ display:"flex", alignItems: "baseline",justifyContent: "space-between" }} >
      <h2>Category List </h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
      <div>
        <Button variant="outlined" onClick={handlePrint} >Print</Button>&nbsp;&nbsp;
        {/* <Button variant="outlined"  ><CSVLink data={dataToCSV}/></Button> */}
        <CSVLink variant="outlined"   data={dataToCSV} style={ csvBtn}>EXPORT as CSV</CSVLink>
      </div>
    </div>
    <TableContainer component={Paper} ref={printRef}>
      <Table aria-label="custom pagination table" ref={printRef}>
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">{columnsHeader[0]}</StyledTableCell>
          {/* Dynamically Data */}
            {getColumnsHeader()}     
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {(rowsPerPage > 0
            ? dataFiltered .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : dataFiltered
            ).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right"><CustomizedMenus/></StyledTableCell> 

            </StyledTableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <CustomPaginationStyle
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={12}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
   
  </>
  );
}
