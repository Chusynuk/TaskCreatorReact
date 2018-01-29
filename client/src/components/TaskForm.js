import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import ValidatorForm from "react-form-validator-core/lib/ValidatorForm";
import TextValidator from "react-material-ui-form-validator/lib/TextValidator";
import DropDown from "./Dropdown";
import DateValidator from "./DateValidator";
import axios from "axios";

const formStyle = {
  marginTop: "5vh"
};

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        delivery_at: null,
        recipient: {
          name: "",
          street: "",
          city: "",
          country: "",
          zipcode: "",
          phone: ""
        }
      },
      submitted: false,
      countries: []
    };

    this.handleChange = this.handleChange.bind(this);
    //this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { recipient } = this.state.formData;
    recipient[event.target.name] = event.target.value;
    this.setState({ recipient });
  }

  // handleCountryChange(country, index, value) {
  //   this.setState({
  //     formData: {
  //       recipient: {
  //         country
  //       }
  //     }
  //   });
  //   console.log(this.state.formData.recipient.country);
  // }

  handleDateChange(date) {
    this.setState({
      formData: {
        delivery_at: date
      }
    });
    console.log(date);
  }

  handleSubmit() {
    const { formData } = this.state;

    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
    axios
      .post("http://localhost:5000/tasks", formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err.res));
  }

  render() {
    const { formData, submitted } = this.state; //Using destructuring, this saves having to write "this.state.X" everywhere.
    return (
      <div>
        <ValidatorForm
          style={formStyle}
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <DateValidator
            name="delivery_at"
            value={formData.delivery_at}
            onChange={this.handleDateChange}
          />
          <TextValidator
            floatingLabelText="Recipient name"
            onChange={this.handleChange}
            name="name"
            value={formData.recipient.name}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <br />
          <TextValidator
            floatingLabelText="Recipient street"
            onChange={this.handleChange}
            name="street"
            value={formData.recipient.street}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <br />
          <TextValidator
            floatingLabelText="Recipient city"
            onChange={this.handleChange}
            name="city"
            value={formData.recipient.city}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <br />
          <DropDown //Here is the Dropdown child component
            countries={this.state.countries}
            name="countries"
            value={formData.recipient.country}
            handleChange={this.handleCountryChange}
          />
          <TextValidator
            floatingLabelText="Recipient zipcode"
            onChange={this.handleChange}
            name="zipcode"
            value={formData.recipient.zipcode}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <br />
          <TextValidator
            floatingLabelText="Recipient phone"
            onChange={this.handleChange}
            name="phone"
            value={formData.recipient.phone}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <br />
          <RaisedButton
            onClick={() => this.handleSubmit()}
            type="submit"
            label={
              (submitted && "Your form is submitted!") ||
              (!submitted && "Submit")
            }
            disabled={submitted}
            backgroundColor="pink"
          />
        </ValidatorForm>
      </div>
    );
  }
}

export default TaskForm;
