import React from "react";
import DatePicker from "material-ui/DatePicker";

const DateCalendar = props => {
  // functional component, we don't need to use class component since we don't need to manage states from the child component

  return (
    <DatePicker
      hintText="Delivery At"
      name={props.name}
      value={props.value}
      autoOk={true}
      onChange={(evt, date) => props.handleChangeDate(date)}
    />
  );
};

export default DateCalendar;
