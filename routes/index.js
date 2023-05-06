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
  {
    id: 3,
    type: "local",
    name: "Kluski śląskie",
    description:
      "Traditional Silesian dish made with grated potatoes and flour, typically served with gravy or goulash.",
    img: "https://staticsmaker.iplsc.com/smaker_prod_2017_09_08/764d0b3218b1256f4ef0b0063d04759b-content.jpg",
    ingredients: [
      { amount: "1.5", unit: "kg", ingredient: "potatoes" },
      { amount: "1", unit: "", ingredient: "egg" },
      { amount: "2", unit: "cups", ingredient: "flour" },
      { amount: "1", unit: "tsp", ingredient: "salt" },
    ],
    steps: [
      {
        description:
          "Peel and grate the potatoes. Squeeze out excess water from the grated potatoes.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a large bowl, mix together grated potatoes, flour, egg, and salt until the mixture forms a dough.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Form the dough into small oval-shaped dumplings using your hands.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Bring a large pot of salted water to a boil. Add the dumplings to the boiling water and cook for 10-12 minutes, or until they rise to the surface.",
        duration: "10-12",
        durationUnit: "min",
      },
      {
        description:
          "Remove the dumplings with a slotted spoon and serve hot with your favorite gravy or goulash.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 4,
    type: "local",
    name: "Pierogi Ruskie",
    description:
      "Traditional Polish dumplings filled with a mixture of mashed potatoes and cheese.",
    img: "https://cdn.aniagotuje.com/pictures/articles/2020/01/2063431-v-1500x1500.jpg",
    ingredients: [
      { amount: "2", unit: "cups", name: "all-purpose flour" },
      { amount: "1/2", unit: "tsp", name: "salt" },
      { amount: "1", unit: "large", name: "egg" },
      { amount: "1/2", unit: "cup", name: "water" },
      { amount: "2", unit: "cups", name: "potatoes, peeled and cubed" },
      { amount: "1/2", unit: "cup", name: "finely chopped onion" },
      { amount: "1/2", unit: "cup", name: "cottage cheese" },
      { amount: "1/2", unit: "cup", name: "shredded cheddar cheese" },
      { amount: "2", unit: "tbsp", name: "unsalted butter" },
      { amount: "1/4", unit: "cup", name: "sour cream" },
      { amount: "1/4", unit: "cup", name: "chopped fresh parsley" },
    ],
    steps: [
      {
        description:
          "In a large bowl, mix together flour and salt. Make a well in the center and add egg and water. Mix until a dough forms.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "On a floured surface, knead dough for 5-10 minutes until smooth. Cover and let rest for 30 minutes.",
        duration: 30,
        durationUnit: "min",
      },
      {
        description:
          "In a separate pot, cook potatoes until tender. Drain and mash in a large bowl.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a separate pan, sauté onion until softened. Add onion, cottage cheese, and cheddar cheese to mashed potatoes. Mix well.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "On a floured surface, roll out dough to 1/8-inch thickness. Cut into circles using a biscuit cutter or drinking glass.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Place a spoonful of potato filling onto each dough circle. Fold the circle in half and pinch edges to seal.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Bring a large pot of salted water to a boil. Add pierogi in batches and cook for 3-5 minutes, until they float to the surface.",
        duration: 5,
        durationUnit: "min",
      },
      {
        description:
          "In a separate pan, melt butter. Serve pierogi with a dollop of sour cream, melted butter, and chopped parsley.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 5,
    type: "local",
    name: "Kopytka",
    description:
      "Traditional Polish potato dumplings similar to Italian gnocchi.",
    img: "https://staticsmaker.iplsc.com/smaker_prod_2015_09_17/826e2b7506bbd2ca4a83f0b5c9a5948d-content.jpg",
    ingredients: [
      { amount: "2", unit: "lbs", name: "russet potatoes, peeled and diced" },
      { amount: "1 1/2", unit: "cups", name: "all-purpose flour" },
      { amount: "1/2", unit: "tsp", name: "salt" },
      { amount: "1", unit: "large", name: "egg" },
      { amount: "2", unit: "tbsp", name: "unsalted butter" },
      { amount: "1/2", unit: "cup", name: "bread crumbs" },
      { amount: "1/4", unit: "cup", name: "chopped fresh parsley" },
      { amount: "2", unit: "tbsp", name: "grated Parmesan cheese" },
    ],
    steps: [
      {
        description:
          "Place potatoes in a large pot and cover with water. Bring to a boil and cook until tender, about 15-20 minutes. Drain and mash potatoes in a large bowl.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a separate bowl, whisk together flour and salt. Add the flour mixture to the mashed potatoes along with the egg. Mix until a dough forms.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "On a floured surface, roll out dough into long ropes about 1/2-inch thick. Cut into 1-inch pieces and roll into oval shapes resembling hooves.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Bring a large pot of salted water to a boil. Add the kopytka and cook until they float to the surface, about 3-5 minutes.",
        duration: 5,
        durationUnit: "min",
      },
      {
        description:
          "In a separate pan, melt butter over medium heat. Add bread crumbs and cook until golden brown, stirring constantly.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Drain kopytka and transfer to a serving dish. Sprinkle with bread crumbs, parsley, and Parmesan cheese.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 6,
    type: "local",
    name: "Kotlet schabowy",
    description:
      "Traditional Polish pork chop, breaded and fried to golden perfection.",
    img: "https://cdn.galleries.smcloud.net/t/photos/gf-vgca-iz81-q4HE_kotlety-schabowe-panierowane-przepis-krok-po-kroku.jpg",
    ingredients: [
      { amount: "4", unit: "boneless", name: "pork chops" },
      { amount: "1/2", unit: "cup", name: "all-purpose flour" },
      { amount: "1/2", unit: "tsp", name: "salt" },
      { amount: "1/4", unit: "tsp", name: "black pepper" },
      { amount: "2", unit: "large", name: "eggs, beaten" },
      { amount: "1", unit: "cup", name: "breadcrumbs" },
      { amount: "1/4", unit: "cup", name: "vegetable oil" },
      { amount: "4", unit: "tbsp", name: "unsalted butter" },
      { amount: null, unit: null, name: "lemon wedges, for serving" },
    ],
    steps: [
      {
        description:
          "Using a meat mallet, pound pork chops until they are thin and even in thickness.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a shallow dish, mix together flour, salt, and black pepper. In another shallow dish, beat eggs.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Coat pork chops in flour mixture, shaking off any excess. Dip in beaten eggs, then coat in breadcrumbs.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a large skillet, heat vegetable oil and butter over medium heat. Add pork chops and cook for 3-4 minutes per side, until golden brown and cooked through.",
        duration: 8,
        durationUnit: "min",
      },
      {
        description: "Serve with lemon wedges on the side.",
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
