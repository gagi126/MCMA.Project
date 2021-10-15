import { Router } from 'express'

import tecnicos from './tecnicos'
import edificios from './edificios'
import users from './users'
import calderas from './calderas'

const router = Router()

router.use('/users',users)
router.use('/calderas',calderas)
router.use('/tecnicos', tecnicos);
router.use('/edificios', edificios);

export default router