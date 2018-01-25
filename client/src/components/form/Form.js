import React from 'react';
import BaseForm from './BaseForm';
import TextField from "material-ui/TextField";

class Form extends BaseForm {
  validations = {
    email: [
      'presence', 'email'
    ],
    amount: {
      presence: true,
      numericality: {
        greaterThan: 10
      }
    }
  };

  $render($) {
    return (<div>
      <TextField {...$('email')} placeholder="Email"/>
      <TextField {...$('amount')} placeholder="Amount"/>

      <button onClick={() => this.performValidation()}>Validate</button>
    </div>);
  }
}

export default Form;
