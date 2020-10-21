import React from "react";
import PropTypes from "prop-types";
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";

const FormElement = props => {
  return (
    <FormGroup row>
      <Label sm={2} for={props.fieldName}>{props.title}</Label>
      <Col sm={10}>
        <Input
          type={props.type}
          name={props.fieldName}
          id={props.fieldName}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
          invalid={!!props.error}
        />
        {
          props.error && <FormFeedback>
            {props.error}
          </FormFeedback>
        }
      </Col>
    </FormGroup>
  );
};

FormElement.propTypes = {
  title: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string
}

export default FormElement;