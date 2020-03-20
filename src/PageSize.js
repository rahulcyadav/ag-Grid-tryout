import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class PageSizeSelect extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("span");
  }

  componentDidMount() {
    const portalContainer = document.querySelector(".ag-paging-panel");
    const firstChild = document.querySelector(".ag-paging-row-summary-panel");
    portalContainer.insertBefore(this.el, firstChild);
  }

  componentWillUnmount() {
    const portalContainer = document.querySelector(".ag-paging-panel");
    portalContainer.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <select value={this.props.value} onChange={this.props.onChange}>
        {this.props.options.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>,
      this.el
    );
  }
}
