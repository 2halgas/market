import React, {Component} from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import {createProduct} from "../../store/actions/productsActions";
import {connect} from "react-redux";

class NewProduct extends Component {
  createNewProduct = product => {
    this.props.onProductCreated(product).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <>
        <h1>Create new product</h1>
        <ProductForm onSubmit={this.createNewProduct} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onProductCreated: product => dispatch(createProduct(product))
  };
};

export default connect(null, mapDispatchToProps)(NewProduct);