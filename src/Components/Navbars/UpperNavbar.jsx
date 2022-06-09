import React from 'react';
import styledComponents from "styled-components";

//icons
import {FaUserAlt} from 'react-icons/fa';
import {AiOutlineDown} from 'react-icons/ai';
import {IoNotifications} from 'react-icons/io5';
import {CgShoppingBag} from 'react-icons/cg';

//Components
import  Button  from '@mui/material/Button';



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

const UpperNavbar = () => {
  return (
    <UpperNavbarItems>
    <div className="image_upperNavbar">
        
    </div>
    
       

    <div className="notification_button">
    </div>
    <MenueUpperNav>
    <Button variant='outlined' startIcon={<CgShoppingBag/>}>POS</Button>
    <NotificationBtn><IoNotifications style={styleOfIcon}/></NotificationBtn> 
    <Button variant='contained' startIcon = { <FaUserAlt/>} endIcon = {<AiOutlineDown/>}>Admin</Button>
    </MenueUpperNav>
</UpperNavbarItems> 
  )
}

export default UpperNavbar