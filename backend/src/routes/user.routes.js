import { Router } from 'express'
import { loginUser, registerUser } from '../controllers/user.controller.js'

import { upload } from '../middlewares/multer.middleware.js'


const router = Router()

router.route("/signup").post(
    upload.single("avatar"),
    registerUser
)


router.route("/login").post(
    loginUser
)



export default router