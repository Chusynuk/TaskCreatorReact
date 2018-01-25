import React from "react";
import TextField from "material-ui/TextField"; // It's a good practice to load every component individually, to improve the perfomance
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from 'material-ui/DatePicker';

const divStyle = {
  paddingTop: "5vh"
};

const buttonStyle = {

  marginTop: "3vh",
  marginBottom: "5vh"
};

export default class Form extends React.Component {
  state = {
    DeliveryAt: "",
    DeliveryAtError: "",
    RecipientName: "",
    RecipientNameError: "",
    RecipientStreet: "",
    RecipientStreetError: "",
    RecipientCity: "",
    RecipientCityError: "",
    RecipientState: "",
    RecipientStateError: "",
    RecipientCountry: "",
    RecipientCountryError: "",
    RecipientZipcode: "",
    RecipientZipcodeError: "",
    RecipientPhone: "",
    RecipientPhoneError: ""
  };

  change = e => {
    // this.props.onChange({
    //   [e.target.name]: e.target.value
    // });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = [{
      DeliveryAtError: ""},{
      RecipientNameError: ""},{
      RecipientStreetError: ""},{
      RecipientCityError: ""},{
      RecipientStateError: ""},{
      RecipientCountryError: ""},{
      RecipientZipcodeError: ""},{
      RecipientPhoneError: ""
    }];

    if (this.state.DeliveryAt.length < 1) {
      isError = true;
      errors.DeliveryAtError = "This field is required";
    }
    if (this.state.RecipientName.length < 1) {
      isError = true;
      errors.RecipientNameError = "This field is required";
    }
    if (this.state.RecipientStreet.length < 1) {
      isError = true;
      errors.RecipientStreetError = "This field is required";
    }
    if (this.state.RecipientCity.length < 1) {
      isError = true;
      errors.RecipientCityError = "This field is required";
    }
    if (this.state.RecipientState.length < 1) {
      isError = true;
      errors.RecipientStateError = "This field is required";
    }
    if (this.state.RecipientCountry.length < 1) {
      isError = true;
      errors.RecipientCountryError = "This field is required";
    }
    if (this.state.RecipientZipcode.length < 1) {
      isError = true;
      errors.RecipientZipcodeError = "This field is required";
    }
    if (this.state.RecipientPhone.length < 1) {
      isError = true;
      errors.RecipientPhoneError = "This field is required";
    }


    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();

    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        DeliveryAt: "",
        DeliveryAtError: "",
        RecipientName: "",
        RecipientNameError: "",
        RecipientStreet: "",
        RecipientStreetError: "",
        RecipientCity: "",
        RecipientCityError: "",
        RecipientState: "",
        RecipientStateError: "",
        RecipientCountry: "",
        RecipientCountryError: "",
        RecipientZipcode: "",
        RecipientZipcodeError: "",
        RecipientPhone: "",
        RecipientPhoneError: ""
      });
    }
  };




  render() {
    return (<form className="Table" >
      <DatePicker style={divStyle} hintText="Delivery at" mode="landscape"/>

      <TextField  name="RecipientName" hintText="Recipient Name" errorText={this.state.RecipientNameError} />
      <br/>
      <TextField name="RecipientStreet" hintText="Recipient Street" value={this.state.RecipientStreet} errorText={this.state.RecipientStreetError} />
      <br/>
      <TextField name="RecipientCity" hintText="Recipient City" value={this.state.RecipientCity} errorText={this.state.RecipientCityError} />
      <br/>
      <TextField name="RecipientState" hintText="Recipient State" value={this.state.RecipientState} errorText={this.state.RecipientStateError} />
      <br/>
      <TextField name="RecipientCountry" hintText="Recipient Country" value={this.state.RecipientCountry} errorText={this.state.RecipientCountryError} />
      <br/>
      <TextField name="RecipientZipcode" hintText="Recipient Zipcode" value={this.state.RecipientZipcode} errorText={this.state.RecipientZipcodeError} />
      <br/>
      <TextField name="RecipientPhone" hintText="Recipient Phone" value={this.state.RecipientPhone} errorText={this.state.RecipientPhoneError} />
      <br/>
      <RaisedButton style={buttonStyle} label="Submit" onClick={e => this.onSubmit(e)} primary="primary"/>
    </form>);
  }
}
