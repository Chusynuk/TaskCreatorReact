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
    axios
      .get("http://localhost:5000/countries")
      .then(response => {
        this.setState({
          countries: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { countries } = this.state; //Destructuring
    return (
      <div>
        <SelectField value={this.props.value} name={this.props.name}>
          {countries.map(({ id, name }, index) => (
            <MenuItem
              value={id}
              primaryText={name}
              key={index}
              onClick={() => this.props.handleChange(id)}
            />
          ))}
        </SelectField>
      </div>
    );
  }
}
