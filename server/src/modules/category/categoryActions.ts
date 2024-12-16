// Some data to make the trick

import type { RequestHandler } from "express";

// Import access to data
import categoryRepository from "./categoryRepository";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();

  res.json(categoriesFromDB);
  // if (req.query.q != null) {
  //   const filteredCategory = categories.filter(
  //     (cat) => cat.name === (req.query.q as string),
  //   );
  //   res.json(filteredCategory);
  // } else {
  //   res.json(categories);
  // }
};

const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);

  const category = categories.find((cat) => cat.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

export default {
  browse,
  read,
};
