import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { List, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";


const data = [
  {
    lastName: "dasdasd",
    totalAmount: 400,
    cartItems: [
      {
        color: "Black",
        size: "500",
        quantity: 2,
        id: "aRLMZkiSU7T0lcsPCSsV",
        cat: "ML",
        name: "Tumbler",
        price: 200
      }
    ],
    orderCreatedAt: { seconds: 1646988892, nanoseconds: 319000000 },
    Address: "France",
    houseNo: "7",
    firstName: "Anna",
    id: "0q0QY5j46rpd2Cqk3Tyo"
  }
];



function CustomFooterTotalComponent(props) {
  return (
    <Box sx={{ padding: "10px", display: "flex" }}>Total : {props.total}</Box>
  );
}

CustomFooterTotalComponent.propTypes = {
  total: PropTypes.number
};




export default function ControlledFilters() {
  const [total, setTotal] = React.useState(0);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70
    },

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => {
        return `${params.getValue(params.id, "firstName") || ""} ${
          params.getValue(params.id, "lastName") || ""
        }`;
      }
    },
    {
      field: "houseAddress",
      headerName: "House and Address",
      type: "number",
      width: 140,
      align: "left",
      valueGetter: (params) => {
        return `${params.getValue(params.id, "houseNo") || ""} ${
          params.getValue(params.id, "Address") || ""
        }`;
      }
    },
    {
      field: "cartItems",
      headerName: "Cart Items",
      type: "number",
      width: 400,
      align: "center",
      valueFormatter: ({ value }) => {
        Object.entries(
          value.reduce((prev, item) => {
            if (!prev[item.id]) prev[item.id] = { ...item, nest: [] };
            prev[item.id].nest.push(item);
            return prev;
          }, {})
        ).map(([id, obj], idx) => (
          <List key={id + obj.color}>
            {console.log(obj.name, "obj name")}
            <ListItemText primary={obj.name + " " + obj.size} />

            <li>
              {obj.nest.map((nest, idx) => (
                <li key={idx}>
                  <ListItemText
                    secondary={nest.color + " (" + nest.quantity + " pcs)"}
                  />
                </li>
              ))}
            </li>
          </List>
        ));
      }
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      type: "number",
      width: 140,
      align: "left"
    },
    {
      field: "orderCreatedAt",
      headerName: "Order Created At",
      type: "date",
      width: 140,
      align: "left"
    }
  ];

  const [filterModel, setFilterModel] = React.useState({
    items: [
      {
        columnField: "totalAmount",
        operatorValue: ">",
        value: "200"
      }
    ]
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        // rows={rows}
        columns={columns}
        rows={data}
        filterModel={filterModel}
        onFilterModelChange={(newFilterModel) => setFilterModel(newFilterModel)}
        components={{
          // Toolbar: GridToolbar,
          Footer: CustomFooterTotalComponent
        }}
        componentsProps={{
          footer: { total }
        }}
        onStateChange={(state) => {
          const visibleRows = state.filter.visibleRowsLookup;
          let visibleItems = [];
          for (const [id, value] of Object.entries(visibleRows)) {
            if (value === true) {
              visibleItems.push(id);
            }
          }
          console.log(visibleItems);
          const res = data.filter((item) => visibleItems.includes(item.id));
          const total = res
            .map((item) => item.totalAmount)
            .reduce((a, b) => a + b, 0);
          console.log(total);
          setTotal(total);
        }}
      />
    </div>
  );
}
