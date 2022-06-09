import React from 'react'
import {AiOutlineBarChart,AiOutlineRollback,AiOutlineRetweet,AiTwotoneTrophy} from 'react-icons/ai'
// import LineChart from '../../Charts/LineChart'
import './SaleCard.css'
// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const fontSize = {
  fontSize:'3em',
  width:'250px',
  paddingLeft:'0px'
}

const styleOfIconRevenue = {
 
  backgroundColor:'#ef476f',
  width:'250px',
  color:'white'
}
const styleOfIconReturn = {
  
  backgroundColor:'#ffd166',
  width:'250px',
  color:'white'
}
const styleOfIconPurchase = {
 
  backgroundColor:'#06d6a0',
  width:'250px',
  color:'white'
}
const styleOfIconProfit = {
  
  backgroundColor:'#118ab2',
  width:'250px',
  color:'white'
}




const SaleCard = () => {
    return (
           <div class="row SaleCard_row">
            <div class="col">
              <div class="card" style={styleOfIconRevenue}>
                <AiOutlineBarChart  class="card-img-top icon_class_SaleCard" style={fontSize}/>
                  <div class="card-body">
                    <h5 class="card-title text-center" >Revenue</h5>
                    <h3 class="card-text text-center">1200 Rs</h3>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card" style={styleOfIconReturn}>
                <AiOutlineRollback  class="card-img-top icon_class_SaleCard" style={fontSize}/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Sale Return</h5>
                    <h3 class="card-text text-center">1200 Rs</h3>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card" style={styleOfIconPurchase}>
                <AiOutlineRetweet  class="card-img-top icon_class_SaleCard" style={fontSize}/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Purchase Return</h5>
                    <h3 class="card-text text-center">1200 Rs</h3>
                  </div>
                </div>
            </div>
            <div class="col">
              <div class="card" style={styleOfIconProfit}>
                <AiTwotoneTrophy  class="card-img-top icon_class_SaleCard" style={fontSize}/>
                  <div class="card-body">
                    <h5 class="card-title text-center">Profit</h5>
                    <h3 class="card-text text-center">1200 Rs</h3>
                  </div>
                </div>
            </div>
           </div>
    )
}

export default SaleCard
