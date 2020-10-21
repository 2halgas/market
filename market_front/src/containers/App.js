import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Toolbar from "../components/UI/Toolbar/Toolbar";
import Products from "./Products/Products";
import NewProduct from "./NewProduct/NewProduct";
import FullProduct from "./FullProduct/FullProduct";
import Register from "./Register/Register";
import Login from "./Login/Login";
import {logoutUser} from "../store/actions/usersActions";

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="mb-3">
          <Toolbar
            logout={this.props.logout}
            user={this.props.user}
          />
        </header>
        <main>
          <Container>
            <Switch>
              <Route path="/" component={Products} exact />
              <Route path="/products/new" component={NewProduct} exact />
              <Route path="/products/categories/:category" component={Products} exact />
              <Route path="/products/:id" component={FullProduct} exact />
              <Route path="/sign-up" component={Register} exact />
              <Route path="/sign-in" component={Login} exact />
            </Switch>
          </Container>
        </main>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
