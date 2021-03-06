const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

/**
 * We have to add the Access-Control-Allow-Origin: *
 * since we will be receiving a cross-origin request https://enable-cors.org/server_expressjs.html
 * from the frontend, which is running on a different port.
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

/**
 *
 *
 *
 */

const port = process.env.PORT || 5000;
const countries = [
  { id: "germany", name: "Germany" },
  { id: "netherlands", name: "Netherlands" }
];
let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { body } = req;

  console.log(body);

  if (
    !body.delivery_at ||
    !body.recipient ||
    !body.recipient.name ||
    !body.recipient.street ||
    !body.recipient.city ||
    !body.recipient.country ||
    !body.recipient.phone ||
    !body.recipient.zipcode
  ) {
    res.status(422).json({ error: "Missing required field(s)" });
    return;
  }

  const countryIds = countries.map(c => c.id);

  if (countryIds.indexOf(body.recipient.country) < 0) {
    res.status(422).json({
      error: `Country '${
        body.recipient.country
      }' not allowed. Allowed countries: ${countryIds.join(", ")}`
    });
    return;
  }

  let task = { recipient: {} };

  task.delivery_at = body.delivery_at;
  task.recipient.name = body.recipient.name;
  task.recipient.street = body.recipient.street;
  task.recipient.zipcode = body.recipient.zipcode;
  task.recipient.city = body.recipient.city;
  task.recipient.state = body.recipient.state;
  task.recipient.country = body.recipient.country;
  task.recipient.phone = body.recipient.phone;

  tasks.push(task);

  res.status(201).json(task);
});

app.get("/countries", (req, res) => {
  res.json(countries);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
