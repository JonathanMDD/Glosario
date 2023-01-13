const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/submit-form', (req, res) => {
  // Get the form data
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Validate the form data
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  // Sanitize the form data
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(message);

  // Process the form data (e.g. send an email, save to database)

  res.send('Form submitted successfully');
});

function sanitizeInput(input) {
  return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
