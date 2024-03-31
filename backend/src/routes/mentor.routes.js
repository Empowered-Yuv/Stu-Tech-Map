import { Router } from 'express'
import { registerMentor } from '../controllers/mentor.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.middleware.js'


const router = Router()

router.route("/signup").post(
    upload.single("avatar"),
    registerMentor
)


export default router