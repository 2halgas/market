import React, {Component} from "react";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {fetchCategories} from "../../store/actions/productsActions";

class ProductForm extends Component {
  state = {
    title: "",
    price: "",
    description: "",
    image: "",
    category: ""
  };

  onSubmitForm = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key]);
    });

    this.props.onSubmit(formData);
  };

  onChangeInputHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  onChangeFileHandler = e => {
    this.setState({image: e.target.files[0]});
  };

  componentDidMount() {
    this.props.onFetchCategories();
  }

  render() {
    return (
      <Form onSubmit={this.onSubmitForm}>
        <FormGroup row>
          <Label md={2} for="title">Title</Label>
          <Col md={10}>
            <Input
              type="text"
              required
              name="title"
              placeholder="Product title"
              id="title"
              value={this.state.title}
              onChange={this.onChangeInputHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={2} for="price">Price</Label>
          <Col md={10}>
            <Input
              type="number"
              required
              name="price"
              placeholder="Product price"
              id="price"
              value={this.state.price}
              onChange={this.onChangeInputHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={2} for="description">Description</Label>
          <Col md={10}>
            <Input
              type="textarea"
              required
              name="description"
              placeholder="Product description"
              id="description"
              value={this.state.description}
              onChange={this.onChangeInputHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={2} for="category">Category</Label>
          <Col md={10}>
            <Input
              type="select"
              required
              name="category"
              placeholder="Product category"
              id="category"
              value={this.state.category}
              onChange={this.onChangeInputHandler}
            >
              <option value="">Select category</option>
              {
                this.props.categories.map(category => {
                  return <option
                    key={category._id}
                    value={category._id}
                  >
                    {category.title}
                  </option>
                })
              }
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label md={2} for="image">Image</Label>
          <Col md={10}>
            <Input
              type="file"
              required
              name="image"
              id="image"
              onChange={this.onChangeFileHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={{offset: 2, size: 10}}>
            <Button type="submit" color="primary">
              Save
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);