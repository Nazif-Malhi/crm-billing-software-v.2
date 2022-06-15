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
  return (<>
    <UpperNavbarItems>
      <div className="image_upperNavbar">
      </div>
      <div className="notification_button">
      </div>
      
      <MenueUpperNav>
      {upperNav === 'outlined' ? <UpperButtons/> : null}
      <ButtonR variant={upperNav} startIcon={<CgShoppingBag/>} onClick={navigateToPOS}>POS</ButtonR>
      <NotificationBtn><IoNotifications style={styleOfIcon}/></NotificationBtn> 
      <ButtonR variant='contained' startIcon = { <FaUserAlt/>} endIcon = {<AiOutlineDown/>}>Admin</ButtonR>
      </MenueUpperNav>
    </UpperNavbarItems>
</>
  )
}

export default UpperNavbar