import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as Io5Icons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi' ;


export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard/>
    },
    {
        title: 'Inventory',
        path: '/dashboard',
        icon: <MdIcons.MdInventory2/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Category',
                path: '/inventory/category',
                icon: <BiIcons.BiCategoryAlt/>
            },
            {
                title: 'Product',
                path: '/inventory/product',
                icon: <MdIcons.MdProductionQuantityLimits/>
            },
            {
                title: 'Adjustment',
                path: '/inventory/adjustment',
                icon: <HiIcons.HiAdjustments/>
            },
            {
                title: 'Stock',
                path: '/inventory/stock',
                icon: <AiIcons.AiOutlineStock/>
            }
        ]
    },
    {
        title: 'Purchase',
        path: '/dashboard',
        icon: <Io5Icons.IoCardSharp/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Add Purchase',
                path: '/purchase/addpurchase',
                icon: <AiIcons.AiOutlineAppstoreAdd/>
            },
            {
                title: 'Purchase List',
                path: '/purchase/purchaselist',
                icon: <AiIcons.AiOutlineUnorderedList/>
            }
           
        ]
    },
    {
        title: 'Expense',
        path: '/dashboard',
        icon: <GiIcons.GiExpense/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Category',
                path: '/expense/addcategory',
                icon: <MdIcons.MdOutlineNoteAdd/>
            },
            {
                title: 'Add Expense',
                path: '/expense/addexpense',
                icon: <GiIcons.GiPayMoney/>
            }
           
        ]
    },
    {
        title: 'Quotation',
        path: '/quotation',
        icon: <RiIcons.RiFile3Fill/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Add Quotation',
                path: '/quotation/addquotation',
                icon: <RiIcons.RiFileAddFill/>
            },
            {
                title: 'Quotation List',
                path: '/quotation/quotationlist',
                icon: <RiIcons.RiListCheck2/>
            }
           
        ]
    },
    {
        title: 'Return',
        path: '/return',
        icon: <AiIcons.AiOutlineRollback/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Sales',
                path: '/return/sales',
                icon: <BsIcons.BsBoxArrowLeft/>
            },
            {
                title: 'Purchase',
                path: '/return/purchase',
                icon: <BsIcons.BsBoxArrowRight/>
            }
           
        ]
    },
    {
        title: 'People',
        path: '/people',
        icon: <BsIcons.BsFillPeopleFill/>,
        iconClosed:<RiIcons.RiArrowLeftSLine/>,
        iconOpen:<RiIcons.RiArrowDownSLine/>,
        subNav: [
            {
                title: 'Customer',
                path: '/people/customer',
                icon: <FaIcons.FaPeopleArrows/>
            },
            {
                title: 'Supplier',
                path: '/people/supplier',
                icon: <FaIcons.FaPeopleCarry/>
            }
           
        ]
    }
]