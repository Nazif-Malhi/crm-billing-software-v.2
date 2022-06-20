import React, {useState} from 'react';
import styledComponents from "styled-components";
import {useNavigate } from 'react-router-dom';


//icons
import {FaUserAlt} from 'react-icons/fa';
import {AiOutlineDown} from 'react-icons/ai';
import {IoNotifications} from 'react-icons/io5';
import {CgShoppingBag} from 'react-icons/cg';

//Components


import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';



/////////////
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import StorageIcon from '@mui/icons-material/Storage';
import WavesIcon from '@mui/icons-material/Waves';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SettingsIcon from '@mui/icons-material/Settings';
///////////



//in line style
const styleOfIcon={fontSize: "1.2em"}

// internal style

const UpperNavbarItems = styledComponents.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: inline-flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    `;

const MenueUpperNav = styledComponents.div`
    position: absolute;
    right:40px;
    height: 50px;
    text-align: center;
    align-items: center;
    display: inline-flex;
    justify-content: space-around;
    padding-left: 10px;
    padding-right: 5px;
    color: #1E90FF;
`;

const NotificationBtn = styledComponents.div`
    width:50px;
    text-align: center;
    align-items: center;
    justify-content:center;

`;


const UpperNavbar = (
  {
    handleUpperNav,
    upperNav,
    setState,
    inactive,
  }
  ) => {
  
  const navigate = useNavigate();

  const navigateToPOS = () => {
    navigate('/pos');
    handleUpperNav();
    if(upperNav === 'contained' && inactive === false){
    setState();
    }
     
  }
    const [disabledStandards , setDisabledStandards] = useState(false);
    const [disabledServices , setDisabledServices] = useState(false);
 
  function forServicesEnable(){
    setDisabledStandards(false);
    setDisabledServices(true)
  }
  function forStandardEnable(){
    setDisabledStandards(true);
    setDisabledServices(false)
  }
  
  const UpperButtons = () => {
    return(
      <div className="paddingRight" style= {{paddingRight:'40px'}}>
        <Stack spacing={2} direction="row">
            <ButtonR variant="contained" disabled={disabledStandards} onClick = {forStandardEnable} style={{backgroundColor:"#059BFF"}}>
                Standards
            </ButtonR>
            <ButtonR variant="contained" disabled={disabledServices} onClick = {forServicesEnable} style = {{backgroundColor:"#FF4069"}}>
                Services
            </ButtonR>
        </Stack>
        </div>
    )
  }
////////////////
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      // vertical: 'bottom',
      // horizontal: 'right',
    }}
    transformOrigin={{
      // vertical: 'top',
      // horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    // borderRadius: 6,
    marginTop: theme.spacing(-2),
    paddingRight:20,
    minWidth: 300,
    minHeight:340,
    top:120,
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

const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  ////////////////////
  return (<>
    <UpperNavbarItems>
      <div className="image_upperNavbar">
      </div>
      <div className="notification_button">
      </div>
      
      {/* <MenueUpperNav>
      {upperNav === 'outlined' ? <UpperButtons/> : null}
      <ButtonR variant={upperNav} startIcon={<CgShoppingBag/>} onClick={navigateToPOS}>POS</ButtonR>
      <NotificationBtn><IoNotifications style={styleOfIcon}/></NotificationBtn> 
      <ButtonR variant='contained' startIcon = { <FaUserAlt/>} endIcon = {<AiOutlineDown/>}>Admin</ButtonR>
      </MenueUpperNav> */}

   <MenueUpperNav>
      {upperNav === 'outlined' ? <UpperButtons/> : null}
      <ButtonR variant={upperNav} startIcon={<CgShoppingBag/>} onClick={navigateToPOS}>POS</ButtonR>
      <NotificationBtn><IoNotifications style={styleOfIcon}/></NotificationBtn> 
      <ButtonR variant='contained' startIcon = { <FaUserAlt/>} endIcon = {<AiOutlineDown/>}
      id="demo-customized-button"
      aria-controls={open ? 'demo-customized-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      disableElevation
      onClick={handleClick}
      >Admin</ButtonR>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <AccountCircleIcon/>
          Profile
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <SettingsIcon/>
          Settings
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <CompareArrowsIcon/>
          My Transactions
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <WavesIcon/>
          My Holiday
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <StorageIcon/>
          Empty Database
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <LogoutIcon/>
          Logout
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
      </StyledMenu>  
      </MenueUpperNav>

    </UpperNavbarItems>
</>
  )
}

export default UpperNavbar