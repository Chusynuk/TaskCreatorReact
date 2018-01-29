import React from "react";
import DatePicker from "material-ui/DatePicker";

class DateCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      delivery_at: null
    };
  }

  handleChange = (event, date) => {
    this.setState({
      delivery_at: date
    });
    console.log(date);
  };

  render() {
    return (
      <DatePicker
        hintText="Delivery At"
        name={this.props.name}
        value={this.props.value}
        autoOk={true}
        value={this.state.delivery_at}
        onChange={this.handleChange}
      />
    );
  }
}

export default DateCalendar;
