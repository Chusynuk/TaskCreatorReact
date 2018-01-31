import React from "react";
import DatePicker from "material-ui/DatePicker";

// class DateCalendar extends React.Component {
const DateCalendar = props => { // functional component   
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     delivery_at: null
  //   };
  // }

  // handleDateChange = (event, date) => {
  //   this.setState({
  //     delivery_at: date
  //   });
  //   console.log(date);
  // };

  // const{ delivery_at } = this.state;
  return (
    <DatePicker
      hintText="Delivery At"
      name={props.name}
      value={props.delivery_at}
      autoOk={true}
      onChange={props.handleChangeDate}
    />
  );
};

export default DateCalendar;
