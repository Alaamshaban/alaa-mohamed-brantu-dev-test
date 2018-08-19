import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions/index";


class productsList extends Component {

  componentWillMount() {
    console.log("component will mount now!!!");
    this.props.fetchProducts();
  }

  renderProducts() {
    if (this.props.productsList.length == 0) {
      return (
        <div className="no-products">No results found!!</div>
      )
    }
    return this.props.productsList.map(product => {
      return (
        <li className="list-group-item" key={product._id}>
          <span className="pull-xs-right">{product.category.name}</span>
          <strong>{product.name}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderProducts()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { productsList: state.productsList.products };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(productsList);
