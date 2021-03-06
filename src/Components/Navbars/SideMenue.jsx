import React, { useState , useEffect } from 'react';
import {BsFillArrowLeftSquareFill , BsSearch , BsFillArrowRightSquareFill} from 'react-icons/bs';
import { SidebarData } from '../Data/SidebarData';
import SideNavbarMenue from './SideNavbarMenue';
import './SideMenue.css';
import UpperNavbar from './UpperNavbar';


const styleOfButton = {color:"#1E90FF",fontSize: "1.7em"}

const styleOfSearchBar= {
    color:"white",
    fontSize:"1.3em"
}


const SideMenue = (props) => {
    const [inactive,setInactive]=useState(false);
    const [upperNav , setUpperNav] = useState('contained');
    const [sideNav , setSideNav] = useState(false);

     useEffect(() => {
         props.onCollapse(inactive);
     }, [inactive , props]); // <- add empty brackets here // refresh when both change 

     function setState (){
        setInactive(!inactive);
     }
     function handleUpperNav(){
        setUpperNav('outlined');
     }
    function handleSideNav(){
        setSideNav(!sideNav);
        setUpperNav('contained');
        setState();
    }

  return (<>
    <div className={ `side-menue ${inactive ? "inactive" : ""}` }>
        <div className="topSection">
            <div className="logo">
            </div>
            <div className="toggle-menue" 
             onClick = {setState}
            >
                {inactive ?
                <BsFillArrowRightSquareFill style={styleOfButton}/>:
                <BsFillArrowLeftSquareFill style={styleOfButton}/>
                }
            </div>
        </div>
    <div className="search-controller">
        <div className="btn-search" >
            <BsSearch style={styleOfSearchBar}/>
        </div>
            <input type="text" placeholder="Search"/>
    </div>
    <div className="divider"/>
        <div className="menue_list">
           {SidebarData.map((item,index) => {
               return <SideNavbarMenue item={item} key={index} handleSideNav = {handleSideNav} upperNav = {upperNav}
               />;
           })}
        </div>
    </div>
    <UpperNavbar 
    handleUpperNav = {handleUpperNav} 
    upperNav = {upperNav} 
    setState = {setState} 
    inactive= {inactive}
    />
    </>)
}
export default SideMenue