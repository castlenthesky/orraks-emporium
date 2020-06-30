import { getCollection } from "./loaders/mongodb";

const collection = getCollection("todos");

collection.find({}).toArray((err, items) => {
  if (err) {
    console.error("Caught erroer:", err);
  } else {
    console.info(items);
    // return res.json(items).end();
  }
});
