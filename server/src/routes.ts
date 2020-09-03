import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import { celebrate, Joi, Segments } from 'celebrate'

import ItemsController from './controller/ItemsController'
import PointsController from './controller/PointsController'

const routes = Router()
const upload = multer(multerConfig)

const itemsController = new ItemsController()
const pointsController = new PointsController()

routes.get('/items', itemsController.index)

routes.get('/points/', pointsController.index)
routes.get('/points/:id', pointsController.show)

routes.post(
  '/points',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.string().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required()
      })
    },
    {
      abortEarly: false
    }
  ),
  pointsController.create
)

export default routes
