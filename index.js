const express = require('express');
const cors = require('cors'); // Імпортуємо cors
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'https://rileyreid1915.github.io', // Дозволяємо тільки ваш сайт
  methods: ['POST'], // Дозволяємо лише POST-запити
  allowedHeaders: ['Content-Type']
}));


// Дозволяємо обробку JSON-запитів
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
  console.log(`Server running on port ${PORT}`);
});