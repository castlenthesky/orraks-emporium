import { Application } from 'express'
import expressLoader from './express';
import MongoLoader from './mongodb';
import {getCollection} from './mongodb'

export default async () => {
  const mongoConnection = await MongoLoader.connect();
  console.log('DB loaded and connected!')

  const app:Application = await expressLoader();
  console.log('Express Initialized...');
  return { app, mongoConnection }
}

