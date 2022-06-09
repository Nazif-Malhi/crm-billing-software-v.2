import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import './SideNavbarMenue.css'

const SidebarLink = styled(Link)`
padding-top: 20px;
position: relative;
display:grid;
grid-template-columns:190px auto;
grid-gap:15px;
align-items:center;
color:#252933;

:hover{
    .iconup{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        width: 40px;
       height: 40px;
       border-radius: 5px;
       display: grid;
       justify-content: center;
       align-items: center;
       text-align: center;
       position: relative;
   }
}

        
`;


const SidebarLabel = styled.span`
margin-left:56px;
position: absolute;
text-decoration:none;

  
`;
const SidebarSubLabel = styled.span`
margin-left:44px;
position: absolute;
text-decoration:none;
font-size: 13px;
font-weight: bold;
`;

const DropDownLink = styled(Link)`
 height:30px;
 padding-top:1rem;
 padding-left:0.3rem;
 padding-bottom:30px;
display:flex;
text-decoration:none;
cursor:pointer;
color:#252933;

 
`;

const SideNavbarMenue = ({item}) => {

    const [subnav, setSubnav] = useState(false);
    const showSubNav = () => setSubnav(!subnav);
    
    return (
            <>
            <IconContext.Provider value={{ color: "#1E90FF"}}>
            <SidebarLink to = {item.path} onClick={item.subNav && showSubNav  }>
                <div >
                 <div className="iconup">
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                    </div>
                </div>
                <div>
                    {item.subNav  && subnav
                    ? item.iconOpen
                : item.subNav
                ? item.iconClosed
            : null}
                </div>
            </SidebarLink>
            <div className="subnav_Div"  >
            { subnav && item.subNav.map((item, index) => {
                return(
                     <DropDownLink to={item.path} key={index} >
                        {item.icon}
                        <SidebarSubLabel>{item.title}</SidebarSubLabel>
                    </DropDownLink>
                )
            })}
            </div>
            </IconContext.Provider>
            </>
    )
}


export default SideNavbarMenue
