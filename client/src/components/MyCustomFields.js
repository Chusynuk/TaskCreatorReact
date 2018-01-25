import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ValidatorForm  from 'react-form-validator-core/lib/ValidatorForm';
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator';
// import Dropdown from './Dropdown';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const dropStyle = { //styles inline because there a few to create a .css file
  width: '18%'
};

export default class MyCustomFields extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      formData: {
        recipientName: '',
        recipientStreet: '',
        recipientCity: '',
        recipientCountry: '',
        recipientZipcode: '',
        recipientPhone: ''
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit() {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  }

  render() {
    const { formData, submitted } = this.state;
    return (
      <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <TextValidator
                    floatingLabelText="Recipient name"
                    onChange={this.handleChange}
                    name="recipientName"
                    value={formData.recipientName}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    floatingLabelText="Recipient street"
                    onChange={this.handleChange}
                    name="recipientStreet"
                    value={formData.recipientStreet}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    floatingLabelText="Recipient city"
                    onChange={this.handleChange}
                    name="recipientCity"
                    value={formData.recipientCity}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <DropDownMenu style={dropStyle}>
                   <MenuItem primaryText="Germany" />
                    <MenuItem  primaryText="Netherlands" />
                </DropDownMenu>
                <br/>
                <TextValidator
                    floatingLabelText="Recipient country"
                    onChange={this.handleChange}
                    name="recipientCountry"
                    value={formData.recipientCountry}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    floatingLabelText="Recipient zipcode"
                    onChange={this.handleChange}
                    name="recipientZipcode"
                    value={formData.recipientZipcode}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <TextValidator
                    floatingLabelText="Recipient phone"
                    onChange={this.handleChange}
                    name="recipientPhone"
                    value={formData.recipientPhone}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <RaisedButton
                    type="submit"
                    label={
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                    disabled={submitted}
                    backgroundColor="pink"
                />
            </ValidatorForm>
    );
  }
}
