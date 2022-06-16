import React from 'react';
import { BarChart, DoughnutChart, PolarAreaChart, PieChart, LineChart } from '../Charts/Charts';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Dashboard.css';
import SaleCard from '../Cards/SaleCard';



const Dashboard = () => {
  return (<>
  <div className="dasboard">
            <div className="topHeader">
                <div className="lefttPaddCont">
                <div className="welcomecon">
                    <h2>Welcome</h2>
                </div>
                </div>
            </div>
            <div className="bottomFooter">
                <div className="lefttPaddCont">
                <div className="upper">
                  <SaleCard/>
                </div>
                </div>
                <div className="seprator">
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h4>CashFlow</h4>
                            <BarChart/>
                        </div>
                        <div className="col-sm-5">
                            <h4>This Month</h4>
                            <PolarAreaChart/>
                        </div>
                    </div>
                </div>
                <div className="seprator yearlyrep">
                    <h3>Yearly Report</h3>
                </div>
                <div className="footer">
                    <LineChart/>
                    <div className="seprator yearlyrep">

                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <h4>Best Seller (Price)</h4>
                            <DoughnutChart/>
                        </div>
                        <div className="col-sm-2">
                            
                        </div>
                        <div className="col-sm-5">
                            <h4>Best Seller (QTY)</h4>
                            <PieChart/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
  </>)
}

export default Dashboard