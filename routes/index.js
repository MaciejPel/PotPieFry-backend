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
          "Bring a large pot of salted water to a boil. Add the dumplings to the boiling water and cook for 10 minutes, or until they rise to the surface.",
        duration: "10",
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
      { amount: "2", unit: "cups", ingredient: "all-purpose flour" },
      { amount: "1/2", unit: "tsp", ingredient: "salt" },
      { amount: "1", unit: "large", ingredient: "egg" },
      { amount: "1/2", unit: "cup", ingredient: "water" },
      { amount: "2", unit: "cups", ingredient: "potatoes, peeled and cubed" },
      { amount: "1/2", unit: "cup", ingredient: "finely chopped onion" },
      { amount: "1/2", unit: "cup", ingredient: "cottage cheese" },
      { amount: "1/2", unit: "cup", ingredient: "shredded cheddar cheese" },
      { amount: "2", unit: "tbsp", ingredient: "unsalted butter" },
      { amount: "1/4", unit: "cup", ingredient: "sour cream" },
      { amount: "1/4", unit: "cup", ingredient: "chopped fresh parsley" },
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
        duration: "30",
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
        duration: "5",
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
      {
        amount: "2",
        unit: "lbs",
        ingredient: "russet potatoes, peeled and diced",
      },
      { amount: "1 1/2", unit: "cups", ingredient: "all-purpose flour" },
      { amount: "1/2", unit: "tsp", ingredient: "salt" },
      { amount: "1", unit: "large", ingredient: "egg" },
      { amount: "2", unit: "tbsp", ingredient: "unsalted butter" },
      { amount: "1/2", unit: "cup", ingredient: "bread crumbs" },
      { amount: "1/4", unit: "cup", ingredient: "chopped fresh parsley" },
      { amount: "2", unit: "tbsp", ingredient: "grated Parmesan cheese" },
    ],
    steps: [
      {
        description:
          "Place potatoes in a large pot and cover with water. Bring to a boil and cook until tender, about 20 minutes. Drain and mash potatoes in a large bowl.",
        duration: "20",
        durationUnit: "min",
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
        duration: "5",
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
      { amount: "4", unit: "boneless", ingredient: "pork chops" },
      { amount: "1/2", unit: "cup", ingredient: "all-purpose flour" },
      { amount: "1/2", unit: "tsp", ingredient: "salt" },
      { amount: "1/4", unit: "tsp", ingredient: "black pepper" },
      { amount: "2", unit: "large", ingredient: "eggs, beaten" },
      { amount: "1", unit: "cup", ingredient: "breadcrumbs" },
      { amount: "1/4", unit: "cup", ingredient: "vegetable oil" },
      { amount: "4", unit: "tbsp", ingredient: "unsalted butter" },
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
        duration: "4",
        durationUnit: "min",
      },
      {
        description: "Serve with lemon wedges on the side.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 7,
    type: "abroad",
    name: "Pizza",
    description:
      "Traditional Italian dish consisting of a yeasted flatbread typically topped with tomato sauce and cheese.",
    img: "https://cdn.aniagotuje.com/pictures/articles/2022/08/31553217-v-1500x1500.jpg",
    ingredients: [
      { amount: "1", unit: "lb", ingredient: "pizza dough" },
      { amount: "1/2", unit: "cup", ingredient: "tomato sauce" },
      { amount: "2", unit: "cups", ingredient: "shredded mozzarella cheese" },
      { amount: "1/2", unit: "cup", ingredient: "sliced pepperoni" },
      { amount: "1/4", unit: "cup", ingredient: "sliced black olives" },
      { amount: "1/4", unit: "cup", ingredient: "sliced green bell pepper" },
      { amount: "1/4", unit: "cup", ingredient: "sliced red onion" },
      { amount: "", unit: "", ingredient: "salt and pepper to taste" },
      { amount: "", unit: "", ingredient: "cornmeal for dusting" },
    ],
    steps: [
      {
        description: "Preheat the oven to 425°F (220°C).",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Stretch the pizza dough to desired size and shape on a floured surface.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Sprinkle cornmeal over a baking sheet or pizza stone to prevent sticking. Transfer the stretched dough to the baking sheet or stone.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Spread the tomato sauce over the dough, leaving a small border around the edges. Top with shredded mozzarella cheese, pepperoni, black olives, green bell pepper, and red onion. Season with salt and pepper to taste.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Bake for 12-15 minutes or until crust is golden brown and cheese is melted and bubbly.",
        duration: "15",
        durationUnit: "min",
      },
      {
        description: "Slice and serve hot.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 8,
    type: "abroad",
    name: "Pad Thai",
    description:
      "A popular Thai street food consisting of stir-fried rice noodles with eggs, tofu, bean sprouts, peanuts, and a choice of protein such as shrimp or chicken.",
    img: "https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg",
    ingredients: [
      { amount: "8", unit: "oz", ingredient: "rice noodles" },
      { amount: "2", unit: "tbsp", ingredient: "vegetable oil" },
      { amount: "2", unit: "", ingredient: "garlic cloves, minced" },
      { amount: "2", unit: "", ingredient: "eggs, beaten" },
      { amount: "1/2", unit: "lb", ingredient: "shrimp, peeled and deveined" },
      { amount: "2", unit: "tbsp", ingredient: "fish sauce" },
      { amount: "2", unit: "tbsp", ingredient: "tamarind paste" },
      { amount: "2", unit: "tbsp", ingredient: "brown sugar" },
      { amount: "1/2", unit: "cup", ingredient: "bean sprouts" },
      { amount: "1/4", unit: "cup", ingredient: "chopped peanuts" },
    ],
    steps: [
      {
        description: "Soak the rice noodles in cold water for 30 minutes.",
        duration: "30",
        durationUnit: "min",
      },
      {
        description:
          "Heat the vegetable oil in a wok or large skillet over medium-high heat. Add the garlic and stir-fry for 1-2 minutes.",
        duration: "2",
        durationUnit: "min",
      },
      {
        description:
          "Add the beaten eggs and scramble until cooked. Add the shrimp and stir-fry for 2-3 minutes until pink.",
        duration: "3",
        durationUnit: "min",
      },
      {
        description:
          "Add the soaked rice noodles, fish sauce, tamarind paste, and brown sugar to the wok. Stir-fry for 3-5 minutes until the noodles are cooked and the sauce has coated everything evenly.",
        duration: "5",
        durationUnit: "min",
      },
      {
        description:
          "Add the bean sprouts and stir-fry for an additional 1-2 minutes.",
        duration: "2",
        durationUnit: "min",
      },
      {
        description:
          "Remove from heat and sprinkle chopped peanuts over the top. Serve with lime wedges and garnish with chopped cilantro.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 9,
    type: "abroad",
    name: "Sushi",
    description:
      "A Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood and vegetables, and often served with pickled ginger, wasabi, and soy sauce.",
    img: "https://hips.hearstapps.com/hmg-prod/images/spicy-crab-rolls4-1654808938.jpg",
    ingredients: [
      { amount: "1", unit: "cup", ingredient: "sushi rice" },
      { amount: "1 1/4", unit: "cups", ingredient: "water" },
      { amount: "1/4", unit: "cup", ingredient: "rice vinegar" },
      { amount: "1", unit: "tbsp", ingredient: "sugar" },
      { amount: "1/2", unit: "tsp", ingredient: "salt" },
      {
        amount: "1/2",
        unit: "lb",
        ingredient: "fresh sushi-grade fish, sliced",
      },
      { amount: "1", unit: "avocado, sliced" },
      { amount: "1/2", unit: "cucumber, sliced" },
      { amount: "4", unit: "sheets", ingredient: "nori seaweed" },
      { amount: "1", unit: "tbsp", ingredient: "wasabi paste" },
    ],
    steps: [
      {
        description: "Rinse the rice in a fine-mesh strainer and drain well.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a medium saucepan, combine the rice, water, vinegar, sugar, and salt. Bring to a boil, then reduce the heat to low and simmer, covered, for 18-20 minutes, or until the liquid is absorbed and the rice is tender.",
        duration: "20",
        durationUnit: "min",
      },
      {
        description:
          "Remove the pan from the heat and let it sit, covered, for 10 minutes. Uncover and fluff the rice with a fork, then let it cool to room temperature.",
        duration: "10",
        durationUnit: "min",
      },
      {
        description:
          "Lay a sheet of nori, shiny-side down, on a bamboo sushi mat. Wet your hands and press a thin layer of rice over the nori, leaving a 1-inch border at the top.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Arrange a few slices of fish, avocado, and cucumber in the center of the rice. Use the mat to roll up the sushi, pressing firmly as you go. Dab a little water on the border of the nori to seal the roll.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Repeat with the remaining ingredients, then use a sharp knife to cut each roll into 6-8 pieces. Serve with pickled ginger, wasabi, and soy sauce.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 10,
    type: "abroad",
    name: "Chicken Tikka Masala",
    description:
      "Indian dish made of marinated and grilled chunks of chicken cooked in a creamy tomato-based sauce.",
    img: "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
    ingredients: [
      {
        amount: "1",
        unit: "lb",
        ingredient: "boneless, skinless chicken breasts",
      },
      { amount: "1", unit: "cup", ingredient: "plain yogurt" },
      { amount: "1/4", unit: "cup", ingredient: "lemon juice" },
      { amount: "2", unit: "tbsp", ingredient: "vegetable oil" },
      { amount: "2", unit: "tbsp", ingredient: "butter" },
      { amount: "1", unit: "large", ingredient: "onion, diced" },
      { amount: "4", unit: "cloves", ingredient: "garlic, minced" },
      { amount: "1", unit: "tbsp", ingredient: "fresh ginger, grated" },
      { amount: "2", unit: "tsp", ingredient: "garam masala" },
      { amount: "2", unit: "tsp", ingredient: "paprika" },
      { amount: "1", unit: "tsp", ingredient: "ground cumin" },
      { amount: "1/2", unit: "tsp", ingredient: "cayenne pepper" },
      { amount: "1", unit: "can", ingredient: "tomato sauce (8 oz)" },
      { amount: "1", unit: "cup", ingredient: "heavy cream" },
      {
        amount: "2",
        unit: "tbsp",
        ingredient: "fresh cilantro, chopped (optional)",
      },
    ],
    steps: [
      {
        description:
          "Cut chicken into bite-sized chunks and marinate in yogurt and lemon juice for at least 1 hour.",
        duration: "1",
        durationUnit: "h",
      },
      {
        description:
          "Preheat oven to 400°F (200°C). Thread chicken onto skewers and brush with vegetable oil. Bake for 15-20 minutes or until cooked through.",
        duration: "20",
        durationUnit: "min",
      },
      {
        description:
          "Melt butter in a large skillet over medium heat. Add onion and cook until translucent. Add garlic and ginger and cook for 1-2 minutes until fragrant.",
        duration: "10",
        durationUnit: "min",
      },
      {
        description:
          "Add garam masala, paprika, cumin, and cayenne pepper and cook for 1-2 minutes until fragrant.",
        duration: "2",
        durationUnit: "min",
      },
      {
        description:
          "Stir in tomato sauce and bring to a simmer. Cook for 5-10 minutes or until sauce thickens slightly.",
        duration: "10",
        durationUnit: "min",
      },
      {
        description:
          "Stir in heavy cream and cooked chicken. Cook for an additional 5-10 minutes until heated through. Season with salt and pepper to taste.",
        duration: "10",
        durationUnit: "min",
      },
      {
        description:
          "Garnish with fresh cilantro if desired and serve with rice or naan bread.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 11,
    type: "abroad",
    name: "Fish and Chips",
    description:
      "A classic British dish consisting of battered and deep-fried fish and thick-cut potato chips, usually served with tartar sauce and mushy peas.",
    img: "https://www.tastingtable.com/img/gallery/classic-british-fish-and-chips-recipe/intro-1670356962.jpg",
    ingredients: [
      { amount: "1", unit: "lb", ingredient: "cod fillets fresh or frozen" },
      { amount: "1", unit: "cup", ingredient: "all-purpose flour" },
      { amount: "1", unit: "tsp", ingredient: "baking powder" },
      { amount: "1/2", unit: "tsp", ingredient: "salt" },
      { amount: "1", unit: "cup", ingredient: "beer cold" },
      { amount: "4-5", unit: "pc", ingredient: "large potatoes" },
      { amount: "1/2", unit: "tsp", ingredient: "salt" },
      { amount: "1/4", unit: "tsp", ingredient: "black pepper" },
      { amount: "2-3", unit: "cups", ingredient: "vegetable oil for frying" },
    ],
    steps: [
      {
        description: "Preheat the oven to 200°F (95°C).",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Peel the potatoes and cut them into thick wedges. Rinse them with cold water and pat them dry with paper towels.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a large pot or Dutch oven, heat the vegetable oil over medium-high heat until it reaches 350°F (175°C).",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "In a large bowl, whisk together the flour, baking powder, and salt. Slowly whisk in the cold beer until the batter is smooth.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Dip the cod fillets in the batter, letting any excess batter drip off, and carefully add them to the hot oil. Fry the fish for about 4-6 minutes per side, or until golden brown and crispy. Transfer the fish to a baking sheet lined with paper towels and keep warm in the oven while you fry the chips.",
        duration: "6",
        durationUnit: "min",
      },
      {
        description:
          "Add the potato wedges to the hot oil and fry them for about 5-7 minutes, or until they are golden brown and crispy. Use a slotted spoon or spider to remove the chips from the oil and transfer them to a baking sheet lined with paper towels. Season with salt and pepper to taste.",
        duration: "7",
        durationUnit: "min",
      },
      {
        description:
          "Serve the fish and chips hot, with tartar sauce, lemon wedges, and mushy peas on the side.",
        duration: null,
        durationUnit: null,
      },
    ],
  },
  {
    id: 12,
    type: "abroad",
    name: "Chicken Parmesan",
    description:
      "An Italian-American dish consisting of breaded chicken breast topped with tomato sauce and melted mozzarella cheese.",
    img: "https://danosseasoning.com/wp-content/uploads/2021/05/Oven-Baked-Chicken-Parm-2-scaled-e1627059836170.jpg",
    ingredients: [
      { amount: "4", unit: "", ingredient: "chicken breasts, pounded thin" },
      { amount: "1", unit: "cup", ingredient: "all-purpose flour" },
      { amount: "2", unit: "", ingredient: "eggs, beaten" },
      { amount: "2", unit: "cups", ingredient: "panko bread crumbs" },
      { amount: "1/2", unit: "cup", ingredient: "grated Parmesan cheese" },
      { amount: "1/2", unit: "tsp", ingredient: "dried oregano" },
      { amount: "1/2", unit: "tsp", ingredient: "garlic powder" },
      { amount: "1/2", unit: "tsp", ingredient: "salt" },
      { amount: "1/4", unit: "tsp", ingredient: "black pepper" },
      { amount: "1/4", unit: "cup", ingredient: "vegetable oil" },
      { amount: "2", unit: "cups", ingredient: "tomato sauce" },
      { amount: "2", unit: "cups", ingredient: "shredded mozzarella cheese" },
      { amount: "", unit: "", ingredient: "fresh basil leaves, for garnish" },
    ],
    steps: [
      {
        description: "Preheat the oven to 400°F (200°C).",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Place the flour in a shallow dish. In another shallow dish, beat the eggs. In a third shallow dish, mix together the panko bread crumbs, Parmesan cheese, oregano, garlic powder, salt, and pepper.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Dredge each chicken breast in the flour, shaking off any excess. Dip in the beaten eggs, then coat in the breadcrumb mixture, pressing to adhere.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Heat the vegetable oil in a large skillet over medium-high heat. Working in batches if necessary, cook the chicken until golden brown and cooked through, about 3-4 minutes per side. Transfer to a baking dish.",
        duration: "4",
        durationUnit: "min",
      },
      {
        description:
          "Top each chicken breast with tomato sauce and shredded mozzarella cheese.",
        duration: null,
        durationUnit: null,
      },
      {
        description:
          "Bake for 10-15 minutes or until the cheese is melted and bubbly.",
        duration: "15",
        durationUnit: "min",
      },
      {
        description:
          "Garnish with fresh basil leaves and serve hot with pasta or garlic bread.",
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
