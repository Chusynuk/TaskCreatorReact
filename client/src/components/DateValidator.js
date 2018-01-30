import React from "react";
import DatePicker from "material-ui/DatePicker";

class DateCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery_at: null
    };
  }

  handleDateChange = (event, date) => {
    this.setState({
      delivery_at: date
    });
    console.log(date);
  };

  render() {
    // const{ delivery_at } = this.state;
    return (
      <DatePicker
        hintText="Delivery At"
        name={this.props.name}
        value={this.state.delivery_at}
        autoOk={true}
        onChange={this.handleDateChange}
      />
    );
  }
}

export default DateCalendar;
