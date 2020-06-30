import config from '../config'
import { MongoClient } from 'mongodb';

export default class MongoLoader {
  // Define static variable to store the client
  public static client: MongoClient;

  // Define static variable to create the initial connection
  public static connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(config.mongo.url, config.mongo.clientOptions,
      (err, client: MongoClient) => {
        if (err) {
          reject(err);
        } else {
          MongoLoader.client = client;
          resolve(client)
        }
      })
    })
  }
}

export function getCollection (collectionName: string) {
  return MongoLoader.client.db(config.mongo.db).collection(collectionName);
}
