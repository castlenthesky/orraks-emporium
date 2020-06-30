import { Router } from 'express';
import * as controller from './controller'

const router = new Router();

router.route('/random')
  .get([controller.getRandom])

router.route('/')
  .get([controller.get])
  .post([controller.post])

router.route('/:id')
  .all([controller.findByID])
  .get([controller.getByID])
  .put([controller.putByID])
  .patch([controller.patchByID])
  .delete([controller.deleteByID])

export default router;
