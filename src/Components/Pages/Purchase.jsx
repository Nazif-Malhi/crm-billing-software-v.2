import React from 'react'
import PurchaseForm from '../Forms/PurchaseForm'
import UpperNavbar from '../Navbars/UpperNavbar'

export const AddPurchase = () => {
  return (<>
    <UpperNavbar/>
    <div className="Forms"  style={{padding:'20px' , paddingTop:'60px'}}>
        {/* Form */}
    <PurchaseForm/>
    </div>
    </>)
}

export const PurchaseList = () => {
    return(
        <div className="Purchase">Purchase List</div>
    )
}