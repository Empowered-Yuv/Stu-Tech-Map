import { Router } from 'express'
import { registerUser} from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.middleware.js'


const router = Router()

router.route("/signup").post(
    upload.single("avatar"),
    registerUser
)





export default router