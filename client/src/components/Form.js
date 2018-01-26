import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MyCustomFields from './MyCustomFields';

const divStyle = { // styles inline because there are just a few, and don't want to overload the application using another file for the css
  marginTop: "5vh"
};


class Form extends React.Component {
  render() {
    return (<div>
      <DatePicker style={divStyle} autoOk={true} hintText="Delivery at" mode="landscape"/>
      <MyCustomFields></MyCustomFields>
      </div>);
  }
}

export default Form;
