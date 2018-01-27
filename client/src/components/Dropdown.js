import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ApiCountries from '../utils/ApiCountries';

const dropStyle = { //styles inline because there a few to create a .css file
  //  width: '310px'
};


class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
     };
  }

  componentWillMount() {
    axios.get('http://localhost:5000/countries')
      .then(response => {
        this.setState({
          countries: response.data,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { countries } = this.state;
    return (
      <div>
           <SelectField style={dropStyle} value={this.props.value} name={this.props.name}>
             {countries.map(({ id, name }, index) => <MenuItem value={id} primaryText={name} key={index} onClick={() => this.props.handleChange(id)} />)}
          </SelectField>
      </div>
    );
  }
}

export default DropDown;
