import React, {useState} from "react";
import SideMenue from "./Components/Navbars/SideMenue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Pages/Dashboard";
import { Category, Product, Stock, Adjustment} from "./Components/Pages/Inventory";
import { AddPurchase, PurchaseList } from "./Components/Pages/Purchase";
import { AddExpense, AddExpenseCategory } from "./Components/Pages/Expense";
import { AddQuotation, QuotationList } from "./Components/Pages/Quotation";
import { ReturnPurchase, ReturnSale } from "./Components/Pages/Return";
import { Customer, Supplier } from "./Components/Pages/People";


function App() {
  const [inactive, setInactive] = useState(false);
  return (<div className="app">
    <Router>
      <SideMenue
       onCollapse={(inactive) => {
        setInactive(inactive);
        }}
      />
    
    <div className={`conatinerOfApp ${inactive ? "inactiveconatinerOfApp" : ""}`}>
      <Routes>
        {/* Dashboard Route with the the path of URL  */}
        <Route  path={"/dashboard"} element={<Dashboard/>}/>


        {/* Inventory Route with the the path of URL  */}
        
        <Route path={"inventory/category"} element ={<Category/>}/>
        <Route path={"inventory/Product"} element= {<Product/>}/>
        <Route path={"inventory/Stock"} element= {<Stock/>}/>
        <Route path={"inventory/Adjustment"} element= {<Adjustment/>}/>

        {/* Purchase Route */}
        <Route path ={"/purchase/addpurchase"} element = {<AddPurchase/>}/>
        <Route path = {"/purchase/purchaselist"} element = {<PurchaseList/>}/>

        {/* Expense Route */}
         <Route path = {"/expense/addcategory"} element = {<AddExpenseCategory/>}/>
         <Route path = {"/expense/addexpense"} element ={<AddExpense/>}/>

         {/* Qoutation Route  */}
         <Route path = {"/quotation/addquotation"} element = {<AddQuotation/>}/>
         <Route path = {'/quotation/quotationlist'} element = {<QuotationList/>}/>

         {/* Return Route */}
         <Route path = {'/return/sales'} element = {<ReturnSale/>}/>
         <Route path = {"/return/purchase"} element = {<ReturnPurchase/>}/>

         {/* People Route */}
         <Route path={"/people/customer"} element={<Customer/>}/>
         <Route path = {"/people/supplier"} element = {<Supplier/>}/>

      </Routes>

    </div>
    </Router>

   </div>
  );
}

export default App;
