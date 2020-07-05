import { Request, Response, Next } from "express";

import { loadCollection } from "../../loaders/mongodb";
import { createUser, IUserData } from "./userFunctions";
import { existsInCollection } from "../../helpers/queryHelpers";

const controllerCollection = "users";

export async function get(req: Request, res: Response) {
  const collection = loadCollection(controllerCollection);
  collection.find(req.query).toArray((err, users) => {
    if (err) {
      console.error("Caught erroer:", err);
      return res.status(500).end();
    } else {
      return res.status(200).json(users).end();
    }
  });
}

export async function post(req: Request, res: Response) {
  let errors = [];

  // TODO: Handle posts with multiple users
  // console.info(req.body.length);

  // Validate the body of the post
  if (!req.body.username) {
    errors.push("New users must have a username.");
  }
  if (!req.body.password) {
    errors.push("New users must have a password.");
  }
  if (!req.body.email) {
    errors.push("New users must have an email.");
  }

  // Check for an existing user with the posted username
  if (
    await existsInCollection(
      controllerCollection,
      "username",
      req.body.username
    )
  ) {
    errors.push("Username must be unique.");
  }
  // Check for an existing user with the posted email
  if (await existsInCollection(controllerCollection, "email", req.body.email)) {
    errors.push(
      "A user already exists with this email address. Try recovering the account."
    );
  }

  if (errors.length) {
    return res.status(402).json({ errors: errors }).send();
  }

  let userData: IUserData = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
    title: req.body.title,
    avatarURL: req.body.avatarURL,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  // Use the posted data to creat a user object
  const newUser = await createUser(userData);

  // Insert the new user into the collection
  console.info("Inserting document...");
  const collection = loadCollection(controllerCollection);
  collection.insertOne(newUser, (err, result) => {
    if (err) {
      return res.status(504).send({ error: err }).end();
    }
    console.info("Document successfully inserted!");
    // TODO: delete hashed passwords from the response
    return res.status(201).json(result.ops).end();
  });
}

export async function findByUsername(req: Request, res: Response, next: Next) {
  const collection = loadCollection(controllerCollection); //Reference collection
  const [record] = await collection
    .find({ username: req.params.username })
    .toArray();
  if (!record) {
    return res.status(404).send({ error: "Document does not exist." }).end();
  }
  req.record = record;
  return next();
}

export async function getByUsername(req: Request, res: Response) {
  // Controller code goes here...
  return res.status(200).send(req.record).end();
}

export async function putByUsername(req: Request, res: Response) {
  // Controller code goes here...
  return res
    .status(200)
    .json({ response: "this api endpoing has not been fully implemented" })
    .end();
}

export async function patchByUsername(req: Request, res: Response) {
  // Controller code goes here...
  return res
    .status(200)
    .json({ response: "this api endpoing has not been fully implemented" })
    .end();
}

export async function deleteByUsername(req: Request, res: Response) {
  // Controller code goes here...
  const collection = loadCollection(controllerCollection); //Reference collection
  collection.deleteOne(
    { username: req.params.username },
    (err, queryResult) => {
      if (err) {
        return res.status(401).send({ error: err }).end();
      }
      const response = {
        record: req.record,
        actionTaken: "Delete",
        result: queryResult.result.ok,
      };
      return res.status(201).json(response).end();
    }
  );
}
