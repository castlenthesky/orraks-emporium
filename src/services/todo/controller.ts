// import { Router, Request, Response, Next } from 'express';
// import * as mongodb from 'mongodb'
// import {getCollection} from '../../loaders/mongodb'

// const todoRoutes = new Router();
// const todoCollection = 'todos'

// // const getCollection = (collectionName: string) => {
// //   return MongoLoader.client.db('todo').collection(collectionName);
// // }

// todoRoutes.get('/todo', (req: Request, res: Response, next: Next) => {
//   const collection = getCollection(todoCollection);
//   collection.find({}).toArray((err, items) => {
//     if (err) {
//       res.status(500).end()
//       console.error('Caught erroer:', err)
//     } else {
//       // items = items.map((item) => { return{
//       //   id: item._id,
//       //   description: item.description
//       // }})
//       return res.json(items).end()
//     }
//   })
// })

// todoRoutes.get('/todo/:id', (req, res, next) => {
//   const id = req.params['id']
//   console.info(`finding todo item: ${id}`)
//   const collection = getCollection(todoCollection)
// })

// todoRoutes.post('/todo', (req: Request, res: Response, next: Next) => {
//   console.info(req.body)
//   const description = req.body['description']
//   const collection = getCollection(todoCollection);
//   collection.insert(req.body)
//   res.end()
// })

// todoRoutes.put('/todo/:id', (req: Request, res: Response, next: Next) => {
//   console.info(req.body)
//   const id = req.params['id']
//   const description = req.body['description']
//   const collection = getCollection(todoCollection);
//   collection.findOneAndUpdate(
//     {"_id": new mongodb.ObjectId(id)}, 
//     {$set: {description: description}}
//   )
//   res.end()
// })

// todoRoutes.patch('/todo/:id', (req: Request, res: Response, next: Next) => {
//   console.info(req.body)
//   res.end()
// })

// todoRoutes.delete('/todo/:id', (req: Request, res: Response, next: Next) => {
//   console.info(req.body)
//   const id = req.params['id']
//   const collection = getCollection(todoCollection);
//   collection.remove({"_id": new mongodb.ObjectId(id)})
//   res.end()
// })

// export default todoRoutes; 
