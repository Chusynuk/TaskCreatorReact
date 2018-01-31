import React, { Component } from "react";
import { Card, CardTitle, CardText } from "material-ui/Card";

const Success = () => {
  return (
    <Card>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>CONGRATS, YOU CREATED THE TASK SUCCESSFUL :)</CardText>
    </Card>
  );
};

export default Success;
