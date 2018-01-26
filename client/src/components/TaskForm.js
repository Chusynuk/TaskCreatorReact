import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import ValidatorForm from 'react-form-validator-core/lib/ValidatorForm';
import TextValidator from 'react-material-ui-form-validator/lib/TextValidator';
import Dropdown from './Dropdown';
import axios from 'axios';



const divStyle = { // styles inline because there are just a few, and don't want to overload the application using another file for the css
  marginTop: "5vh"
};

class TaskForm extends React.Component {

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
      countries: []
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

componentDidMount(){
  axios.get('http://localhost:5000/countries')
    .then(response => {
      this.setState({
        countries: response.data
      })
    })
    .catch(error => {
      console.log(error);
    })
}

  render() {
    const { formData, submitted } = this.state; //destructuring
    return (<div>
      <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
              <DatePicker style={divStyle} autoOk={true} hintText="Delivery at" mode="landscape"/>
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
                <Dropdown countries={this.state.countries}/>
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
    </div>);
  }
}

export default TaskForm;
