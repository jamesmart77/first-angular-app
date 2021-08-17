const express = require('express');
const bodyParser = require('body-parser');
const habits = require('./habits');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.get('/health', (req, res) => {
  res.send("We're so healthy it's sickening :P")
})

app.get('/api/habits', (req, res) => {
  res.json(habits);
})

app.post('/api/habits', function (req, res) {
  let habit = req.body;
  habit.id = habits.length + 1;
  habit.count = 0;
  habits.push(habit);
  res.json({ message: "successfully added habit!"});
});

app.listen(port, () => {
  console.log(`Habit service listening at http://localhost:${port}`)
})
