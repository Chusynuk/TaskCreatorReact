import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ApiCountries from '../utils/ApiCountries';

// const getCountries = countries =>{
//   `../utils/API/${countries}`
// }


const dropStyle = { //styles inline because there a few to create a .css file
  width: '310px'
};


class DropDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: 1, countries: [] };

    axios.get('http://localhost:3000/countries')
      .then(response => {
        this.setState({
          countries: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })

  }

  // componentDidMount(){
  //
  //   fetch(ApiCountries)
  //   .then(response => response.json())
  //   .then((foo) => {this.State({foo});
  // });
  // }

  fetchData() {}

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div>
           <DropDownMenu style={dropStyle} value={this.state.value} onChange={this.handleChange}>
             {this.state.countries.map(countrie=>
               <MenuItem  value={this.state.countrie} primaryText={this.state.countrie}>{countrie}</MenuItem>
             )}
            {/* <MenuItem value={1} primaryText="None" />
            <MenuItem value={2} primaryText="Germany" />
            <MenuItem value={3} primaryText="Netherlands" /> */}
          </DropDownMenu>
          {/* <ul>
            {this.state.nombres.map(nombre=>{
              <li>{nombre}</li>
            })}
          </ul> */}
      </div>
    );
  }
}

export default DropDown;
