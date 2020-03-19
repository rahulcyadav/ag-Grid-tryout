export const athleteColDefs = [
  {
    headerName: "#",
    width: 50,
    cellRenderer: function(params) {
      return params.node.rowIndex + 1;
    }
  },
  {
    headerName: "Athlete",
    field: "athlete",
    width: 150,
    filter: "agTextColumnFilter",
    filterParams: {
      filterOptions: ["contains"]
    }
  },
  {
    headerName: "Age",
    field: "age",
    width: 90
  },
  {
    headerName: "Country",
    field: "country",
    width: 120
  },
  {
    headerName: "Year",
    field: "year",
    width: 90
  },
  {
    headerName: "Date",
    field: "date",
    width: 110
  },
  {
    headerName: "Sport",
    field: "sport",
    width: 110
  },
  {
    headerName: "Gold",
    field: "gold",
    width: 100
  },
  {
    headerName: "Silver",
    field: "silver",
    width: 100
  },
  {
    headerName: "Bronze",
    field: "bronze",
    width: 100
  },
  {
    headerName: "Total",
    field: "total",
    width: 100
  }
];

export const carColDefs = [
  { headerName: "Make", field: "make" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" }
];
export const carRowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

export const defaultColDef = {
  resizable: true,
  filter: true
};

export const pageSizeOptions = [5, 10, 15, 20];
