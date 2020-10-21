import React, {Component} from "react";
import {deleteProduct, fetchProduct, fetchProducts} from "../../store/actions/productsActions";
import {connect} from "react-redux";
import ProductThumbnail from "../../components/ProductList/ProductThumbnail/ProductThumbnail";
import {Button} from "reactstrap";

class FullProduct extends Component {
  componentDidMount() {
    this.props.onFetchProduct(this.props.match.params.id);
  }

  onDeleteHandler = (id) => {
    this.props.onDeleteProduct(id).then(() => {
      this.props.onFetchProducts()
    });
    this.props.history.push("/");
  }

  render() {
    return (
      <>
        <h1>
          {this.props.product.title} | <small>{this.props.product.price} USD</small>
        </h1>
        <ProductThumbnail
          title={this.props.product.title}
          image={this.props.product.image}
        />
        <p>
          {this.props.product.description}
        </p>
        {
          this.props.product.user ?
            <div>
              <p>{this.props.product.user.display_name} <strong>tel: {this.props.product.user.phone_number}</strong></p>
            </div> : null
        }
        {
          this.props.product.user && (this.props.user && this.props.user.username === this.props.product.user.username) ?
            <Button onClick={() => this.onDeleteHandler(this.props.match.params.id)}>Delete</Button> : null
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.product,
    user: state.users.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchProduct: id => dispatch(fetchProduct(id)),
    onDeleteProduct: id => dispatch(deleteProduct(id)),
    onFetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullProduct);