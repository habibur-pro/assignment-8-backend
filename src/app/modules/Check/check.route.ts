import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('check success')
})

const CheckRoutes = router
export default CheckRoutes
