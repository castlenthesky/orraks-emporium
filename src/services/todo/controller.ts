import { Request, Response, Next } from "express";
import { ObjectId } from "mongodb";

import { getCollection } from "../../loaders/mongodb";

export async function get(req: Request, res: Response) {
  const collection = getCollection("todos");
  collection.find(req.query).toArray((err, items) => {
    if (err) {
      console.error("Caught erroer:", err);
      return res.status(500).end();
    } else {
      return res.status(200).json(items);
    }
  });
}

export async function getRandom(req: Request, res: Response) {
  const collection = getCollection("todos");
  const [entry] = await collection
    .aggregate([{ $sample: { size: 1 } }])
    .toArray();
  res.json(entry);
}

export async function post(req: Request, res: Response) {
  console.info("posting records");
}

export async function findByID(req: Request, res: Response, next: Next) {
  const collection = getCollection("todos"); //Reference collection
  const [record] = await collection
    .find({ _id: ObjectId(req.params.id) })
    .toArray();
  if (!record) {
    return res.status(404).send({ error: "Document does not exist." }).end();
  }
  req.record = record;
  return next();
}

export async function getByID(req: Request, res: Response) {
  // Controller code goes here...
  res.status(200).send(req.record).end();
}

export async function putByID(req: Request, res: Response) {
  // Controller code goes here...
}

export async function patchByID(req: Request, res: Response) {
  // Controller code goes here...
}

export async function deleteByID(req: Request, res: Response) {
  // Controller code goes here...
}
