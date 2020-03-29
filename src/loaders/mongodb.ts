import * as mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
  console.log(`Connecting to server...`);
  const connection = await mongoose.connect(
    config.mongoURI,
    {
      useNewUrlParser: true, 
      useCreateIndex: true ,
      useUnifiedTopology: true
    }
  );

  return connection.connection.db;
};