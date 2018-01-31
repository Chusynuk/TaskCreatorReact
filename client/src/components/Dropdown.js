import React from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentWillMount() {
    const processResponse = this.processResponse.bind(this);
    axios
      .get("http://localhost:5000/countries")
      .then(response => processResponse(response))
      .catch(error => {
        console.log(error);
      });
  }

  processResponse(response) {
    this.setState({ countries: response.data });
  }

  // handleChange = e => {
  //   this.setState({ countries: e.target.value }, () => {
  //     this.onChange(e.target.value);
  //   });
  // };

  render() {
    const { countries } = this.state; //Destructuring
    return (
      <div>
        <SelectField
          floatingLabelText="Country"
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.handleChange}
        >{this.props.children}
          {countries.map(({ id, name }, index) => (
            <MenuItem value={id} primaryText={name} key={index} />
          ))}
        </SelectField>
      </div>
    );
  }
}
