import React, {Component} from "react";
import {Alert, Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import FormElement from "../../components/UI/Form/FormElement";
import {loginUser} from "../../store/actions/usersActions";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  inputChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  submitFormHandler = e => {
    e.preventDefault();
    this.props.loginUser(this.state);
  };

  getFieldError = fieldName => {
    return this.props.error && this.props.error.errors &&
      this.props.error.errors[fieldName] &&
      this.props.error.errors[fieldName].properties &&
      this.props.error.errors[fieldName].properties.message;
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        {
          this.props.error && <Alert color="danger">
            {this.props.error.error}
          </Alert>
        }
        <Form onSubmit={this.submitFormHandler}>
          <FormElement
            type="text"
            title="Username"
            fieldName="username"
            placeholder="Username"
            required={false}
            value={this.state.username}
            onChange={this.inputChangeHandler}
            error={this.getFieldError("username")}
          />
          <FormElement
            type="password"
            title="Password"
            fieldName="password"
            placeholder="Password"
            required={false}
            value={this.state.password}
            onChange={this.inputChangeHandler}
            error={this.getFieldError("password")}
          />
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}>
              <Button type="submit" color="primary">
                Login
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.users.loginError
  }
};
const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => dispatch(loginUser(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);