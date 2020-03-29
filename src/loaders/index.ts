import expressLoader from './express';
import mongoLoader from './mongodb';

export default async ({ expressApp }) => {
  const mongoConnection = await mongoLoader();
  console.log('DB loaded and connected!')

  await expressLoader({ app: expressApp });
  console.log('Express Initialized...');
}
