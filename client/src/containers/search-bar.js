import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProductsByName } from "../actions/index";
import { fetchProducts } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  onInputChange(term) {
    if (term != "") {
      this.props.fetchProductsByName(term).then(products => {
        this.setState({ productsList: products.payload.data });
      });
    } else {
      this.props.fetchProducts(term).then(products => {
        this.setState({ productsList: products.payload.data });
      });
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search for products here"
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProductsByName,fetchProducts }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
