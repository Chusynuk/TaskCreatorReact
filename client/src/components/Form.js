import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MyCustomFields from './MyCustomFields';

const divStyle = { // styles inline because there are just a few, and don't want to overload the application using another file for the css
  marginTop: "5vh"
};


class Form extends React.Component {
  // state = {
  //   DeliveryAt: "",
  //   DeliveryAtError: "",
  //   RecipientName: "",
  //   RecipientNameError: "",
  //   RecipientStreet: "",
  //   RecipientStreetError: "",
  //   RecipientCity: "",
  //   RecipientCityError: "",
  //   RecipientState: "",
  //   RecipientStateError: "",
  //   RecipientCountry: "",
  //   RecipientCountryError: "",
  //   RecipientZipcode: "",
  //   RecipientZipcodeError: "",
  //   RecipientPhone: "",
  //   RecipientPhoneError: ""
  // };

  // change = e => {
  //   this.props.onChange({
  //     [e.target.name]: e.target.value
  //   });
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  // validate = () => {
  //   let isError = false;
  //   const errors = {
  //     DeliveryAtError: "",
  //     RecipientNameError: "",
  //     RecipientStreetError: "",
  //     RecipientCityError: "",
  //     RecipientStateError: "",
  //     RecipientCountryError: "",
  //     RecipientZipcodeError: "",
  //     RecipientPhoneError: ""
  //   };

  //   if (this.state.DeliveryAt.length < 1) {
  //     isError = true;
  //     errors.DeliveryAtError = "This field is required";
  //   }
  //
  //   this.setState({
  //     ...this.state,
  //     ...errors
  //   });
  //
  //   return isError;
  // };

  // onSubmit = e => {
  //   e.preventDefault();
  //
  //   const err = this.validate();
  //   if (!err) {
  //     // clear form
  //     this.setState({
  //       DeliveryAt: "",
  //       DeliveryAtError: "",
  //       RecipientName: "",
  //       RecipientNameError: "",
  //       RecipientStreet: "",
  //       RecipientStreetError: "",
  //       RecipientCity: "",
  //       RecipientCityError: "",
  //       RecipientState: "",
  //       RecipientStateError: "",
  //       RecipientCountry: "",
  //       RecipientCountryError: "",
  //       RecipientZipcode: "",
  //       RecipientZipcodeError: "",
  //       RecipientPhone: "",
  //       RecipientPhoneError: ""
  //     });
  //   }
  // };

  render() {
    return (<form>
      <DatePicker style={divStyle} autoOk={true} hintText="Delivery at" mode="landscape"/>

      <MyCustomFields></MyCustomFields>
      {/* <TextField name="RecipientName" hintText="Recipient Name" value={this.state.RecipientName} errorText={this.state.RecipientNameError}/>
      <br/>
      <TextField name="RecipientStreet" hintText="Recipient Street" value={this.state.RecipientStreet} errorText={this.state.RecipientStreetError}/>
      <br/>
      <TextField name="RecipientCity" hintText="Recipient City" value={this.state.RecipientCity} errorText={this.state.RecipientCityError}/>
      <br/>
      <TextField name="RecipientState" hintText="Recipient State" value={this.state.RecipientState} errorText={this.state.RecipientStateError}/>
      <br/>
      <TextField name="RecipientCountry" hintText="Recipient Country" value={this.state.RecipientCountry} errorText={this.state.RecipientCountryError}/>
      <br/>
      <TextField name="RecipientZipcode" hintText="Recipient Zipcode" value={this.state.RecipientZipcode} errorText={this.state.RecipientZipcodeError}/>
      <br/>
      <TextField name="RecipientPhone" hintText="Recipient Phone" value={this.state.RecipientPhone} errorText={this.state.RecipientPhoneError}/>
      <br/> */}
      {/* <RaisedButton style={buttonStyle} label="Submit" onClick={e => this.onSubmit(e)} backgroundColor="pink"/> */}
    </form>);
  }
}

export default Form;
