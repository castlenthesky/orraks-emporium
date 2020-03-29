import expressLoader from './express';
import mongooseLoader from './mongodb';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  console.log('DB loaded and connected!')

  await expressLoader({ app: expressApp });
  console.log('Express Initialized...');
}
