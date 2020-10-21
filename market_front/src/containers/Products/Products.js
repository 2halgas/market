import React, {Component} from "react";
import {Col, Row, Button} from "reactstrap";
import {fetchProducts, fetchCategories} from "../../store/actions/productsActions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import CategoriesMenu from "../../components/CategoriesMenu/CategoriesMenu";

class Products extends Component {
    componentDidMount() {
        this.props.onFetchCategories();
        this.props.onFetchProducts(this.props.match.params.category);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.category !== prevProps.match.params.category) {
            this.props.onFetchProducts(this.props.match.params.category);
        }
    }

    render() {
        return (
            <>
                <h1>
                    Products
                </h1>
                <Row>
                    <Col md={2}>
                        <CategoriesMenu categories={this.props.categories}/>
                    </Col>
                    <Col md={4}>
                        {
                            this.props.user ?
                                <Link to="/products/new">
                                    <Button
                                        color="primary"
                                        className="float-right"
                                    >
                                        Add Product
                                    </Button>
                                </Link> : null
                        }
                    </Col>
                </Row>
                <ProductList
                    products={this.props.products}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        products: state.products.products,
        users: state.users.users
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onFetchCategories: () => dispatch(fetchCategories()),
        onFetchProducts: (category) => dispatch(fetchProducts(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);