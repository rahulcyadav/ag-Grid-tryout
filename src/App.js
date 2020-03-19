import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import "./styles.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {
  carColDefs,
  athleteColDefs,
  carRowData,
  defaultColDef,
  pageSizeOptions
} from "./config";
import PageSizeSelect from "./PageSize";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: athleteColDefs,
      rowData: [],
      selectedPageSize: pageSizeOptions[1]
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json"
      )
      .then(response => {
        console.log(response.data);
        this.setState({ rowData: response.data });
      });
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };
  handlePageSizeChange = event => {
    // this.setState({ selectedPageSize: event.target.value });
    this.gridApi.paginationSetPageSize(event.target.value);
    this.forceUpdate();
  };

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact
          onGridReady={this.onGridReady}
          debug={true}
          columnDefs={this.state.columnDefs}
          defaultColDef={defaultColDef}
          rowData={this.state.rowData}
          floatingFilter={true}
          pagination={true}
          paginationPageSize={this.state.selectedPageSize}
        />
        {this.gridApi && (
          <PageSizeSelect
            options={pageSizeOptions}
            value={this.gridApi.paginationGetPageSize()}
            onChange={this.handlePageSizeChange}
          />
        )}
      </div>
    );
  }
}
