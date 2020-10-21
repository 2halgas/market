import React, {Component} from "react";
import {Button, Col, Form, FormGroup} from "reactstrap";
import {registerUser} from "../../store/actions/usersActions";
import {connect} from "react-redux";
import FormElement from "../../components/UI/Form/FormElement";

class Register extends Component {
  state = {
    username: "",
    password: "",
    phone_number: "",
    display_name: ""
  };
  inputChangeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  submitFormHandler = e => {
    e.preventDefault();
    this.props.onUserRegistered(this.state, this.props.history);
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
        <h1>Register new user</h1>
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
          <FormElement
            type="number"
            title="Phone Number"
            fieldName="phone_number"
            placeholder="Phone Number"
            required={false}
            value={this.state.phone_number}
            onChange={this.inputChangeHandler}
            error={this.getFieldError("phone_number")}
          />
          <FormElement
            type="text"
            title="Display name"
            fieldName="display_name"
            placeholder="Display Name"
            required={false}
            value={this.state.display_name}
            onChange={this.inputChangeHandler}
            error={this.getFieldError("display_name")}
          />
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}>
              <Button type="submit" color="primary">
                Register
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
    error: state.users.registerError
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onUserRegistered: (userData) => dispatch(registerUser(userData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);