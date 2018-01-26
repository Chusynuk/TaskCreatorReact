import React from 'react';
import TextField from "material-ui/TextField"; // It's a good practice to load every component individually, to improve the perfomance
// import ValidatorForm  from 'react-form-validator-core/lib/ValidatorForm';
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator';

const TaskField = (props) => {

  return (  <TextValidator
        floatingLabelText="Recipient name"
        onChange={props.handleChange}
        name={prop}
        value={props.formData.recipientName}
        validators={['required']}
        errorMessages={['this field is required']}
    />
    <br /> )
}


export default TaskField;
