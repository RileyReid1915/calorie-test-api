const express = require('express');
const cors = require('cors'); // Додаємо CORS

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Дозволяємо всі запити з будь-якого домену
app.use(express.json());

app.post('/api/calculate-calories', (req, res) => {
  const { weight, height, age, gender } = req.body;
  let calories;

  if (gender === 'male') {
    calories = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else {
    calories = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }

  res.json({ daily_calories: Math.round(calories * 1.2) });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});