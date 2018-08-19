import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProductsByName } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  onInputChange(term) {
    if (term != '') {
      this.props.fetchProductsByName(term).then(products => {
        this.setState({ productsList: products.payload.data })
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
  return bindActionCreators({ fetchProductsByName }, dispatch);
}
function mapStateToProps(state) {
  return { productsList: state.productsList.productsByName };
}
//passing null as passing dispathes must be the seconed argument in connect function
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
