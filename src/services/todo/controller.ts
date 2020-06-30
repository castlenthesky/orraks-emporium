import { Request, Response, Next } from 'express'
import {getCollection} from '../../loaders/mongodb'

export async function get (req: Request, res: Response) {
  const collection = getCollection('todos');
  collection.find(req.query).toArray((err, items) => {
    if (err) {
      console.error('Caught erroer:', err)
      return res.status(500).end()
    } else {
      return res.status(200).json(items)
    }
  });
}

export async function post (req: Request, res: Response) {
  console.info('posting records')
}

export async function findByID (req: Request, res: Response) {

}

export async function getByID (req: Request, res: Response) {

}

export async function putByID (req: Request, res: Response) {

}

export async function patchByID (req: Request, res: Response) {

}

export async function deleteByID (req: Request, res: Response) {

}
