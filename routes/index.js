const express = require("express");

const data = [
  {
    id: 1,
    type: "local",
    name: "Bigos",
    description:
      "Traditional Polish stew made with cabbage, meat, and sauerkraut.",
    img: "https://st3.depositphotos.com/11352464/17702/i/450/depositphotos_177026134-stock-photo-bigos-a-traditional-polish-dish.jpg",
    ingredients: [
      { amount: "1", unit: "kg", ingredient: "sauerkraut" },
      { amount: "500", unit: "g", ingredient: "smoked meat" },
      { amount: "500", unit: "g", ingredient: "fresh cabbage" },
      { amount: "1", unit: "pc", ingredient: "onion" },
      { amount: "2", unit: "pc", ingredient: "carrots" },
      { amount: "2", unit: "pc", ingredient: "garlic cloves" },
      { amount: "1", unit: "tsp", ingredient: "paprika" },
      { amount: "1", unit: "tsp", ingredient: "caraway seeds" },
      { amount: "2", unit: "tbsp", ingredient: "tomato paste" },
      { amount: "1", unit: "tbsp", ingredient: "flour" },
      { amount: "1", unit: "glass", ingredient: "red wine" },
      { amount: "2", unit: "tbsp", ingredient: "oil" },
      { amount: "to taste", unit: "", ingredient: "salt and pepper" },
    ],
    steps: [
      {
        description:
          "Drain sauerkraut and rinse it thoroughly in cold water. Cut smoked meat into small cubes.",
        duration: "10",
        durationUnit: "min",
      },
      {
        description:
          "Heat up the oil in a large pot. Add chopped onion and garlic and sauté until onion is translucent.",
        duration: "5",
        durationUnit: "min",
      },
      {
        description: "Add the smoked meat and sauté for another 5 minutes.",
        duration: "5",
        durationUnit: "min",
      },
      {
        description:
          "Add grated carrots, sliced fresh cabbage, paprika, and caraway seeds. Mix everything well.",
        duration: null,
        durationUnit: null,
      },
      {
        description: "Add tomato paste and flour, mix again.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Add red wine and sauerkraut. Season with salt and pepper to taste.",
        duration: null,
        durationUnit: null,
      },
      {
        description: "Simmer over low heat for at least 1 hour.",
        duration: "1",
        durationUnit: "h",
      },
    ],
  },
  {
    id: 2,
    type: "local",
    name: "Zupa pomidorowa",
    description:
      "Traditional Polish tomato soup made with fresh tomatoes, onions, and cream.",
    img: "https://cdn.aniagotuje.com/pictures/articles/2018/06/74982-v-900x556.jpg",
    ingredients: [
      { amount: "1", unit: "kg", ingredient: "fresh tomatoes" },
      { amount: "1", unit: "pc", ingredient: "onion" },
      { amount: "2", unit: "cloves", ingredient: "garlic" },
      { amount: "1", unit: "tbsp", ingredient: "butter" },
      { amount: "1", unit: "tbsp", ingredient: "flour" },
      { amount: "2", unit: "cups", ingredient: "vegetable broth" },
      { amount: "1", unit: "cup", ingredient: "heavy cream" },
      { amount: "to taste", unit: "", ingredient: "salt and pepper" },
      { amount: "1", unit: "tbsp", ingredient: "sugar" },
      { amount: "2", unit: "tbsp", ingredient: "chopped fresh parsley" },
    ],
    steps: [
      {
        description:
          "Peel and chop the onion and garlic. In a large pot, melt butter over medium heat. Add chopped onion and garlic and cook until onion is translucent.",
        duration: "5",
        durationUnit: "min",
      },
      {
        description:
          "Wash tomatoes and cut them into quarters. Add them to the pot and cook for 10 minutes.",
        duration: "10",
        durationUnit: "min",
      },
      {
        description:
          "Sprinkle flour over the tomato mixture and stir well. Cook for another 2-3 minutes.",
        duration: "3",
        durationUnit: "min",
      },
      {
        description:
          "Add vegetable broth and bring to a boil. Reduce heat and let it simmer for 15 minutes.",
        duration: "15",
        durationUnit: "min",
      },
      {
        description:
          "Add heavy cream, sugar, salt, and pepper to taste. Simmer for another 5 minutes.",
        duration: "5",
        durationUnit: "min",
      },
      {
        description:
          "Remove from heat and blend the soup until smooth using an immersion blender or transferring it to a regular blender. ",
        duration: null,
        durationUnit: null,
      },
      {
        description: "Garnish with chopped fresh parsley and serve hot.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
];

const router = express.Router();

router.route("/dish").get((req, res) => {
  const dishes = data.map((dish) => ({
    id: dish.id,
    type: dish.type,
    name: dish.name,
    description: dish.description,
    img: dish.img,
  }));
  res.status(200).send(dishes);
});

router.route("/dish/:id").get((req, res) => {
  const dish = data.filter((dish) => dish.id == req.params.id)[0];
  res.status(200).send(dish);
});

module.exports = router;
