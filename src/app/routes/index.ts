import { Router } from 'express'
import CheckRoutes from '../modules/Check/check.route'

const router = Router()
const routes = [
  {
    path: '/check',
    route: CheckRoutes,
  },
]

routes.map(route => router.use(route.path, route.route))

export default router
