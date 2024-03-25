import { Router } from 'express'
import { registerUser } from '../controllers/user.controller.js'

import { upload } from '../middlewares/multer.middleware.js'


const router = Router()

router.route("/signup").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerUser
)



export default router