import { Router, Request, Response, Next } from 'express';
import * as mongodb from 'mongodb'
import {getCollection} from '../../loaders/mongodb'

const todoRoutes = new Router();

todoRoutes.get('/', async (req: Request, res: Response, next: Next) => {
  console.info(req.query);
  const collection = getCollection('todos');
  collection.find(req.query).toArray((err, items) => {
    if (err) {
      res.status(500).end()
      console.error('Caught erroer:', err)
    } else {
      // items = items.map((item) => { return{
      //   id: item._id,
      //   description: item.description
      // }})
      return res.json(items).end()
    }
  // [console.info('requesting todo list')]
  });
});

todoRoutes.get('/:id', async (req, res, next) => {
  [console.info('requesting specific todo by ID')]
})

todoRoutes.post('/', async (req: Request, res: Response, next: Next) => {
  [
    console.info('posting todo list')
  ]
})

todoRoutes.put('/:id', async (req: Request, res: Response, next: Next) => {
  [console.info('replacing todo by id')]
})

todoRoutes.patch('/:id', async (req: Request, res: Response, next: Next) => {
  [console.info('updating todo by id')]
})

todoRoutes.delete('/:id', async (req: Request, res: Response, next: Next) => {
  [console.info('deleting todo by id')]
})

export default todoRoutes; 
