import { Router } from 'express'
import { loginUser, registerUser, getUser, getUserAvatar, googleHandled } from '../controllers/user.controller.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'
import { upload } from '../middlewares/multer.middleware.js'


const router = Router()

router.route("/signup").post(
    upload.single("avatar"),
    registerUser
)


router.route("/login").post(
    loginUser
)

router.route("/get-current-user").get(
    verifyJWT,
    getUser
)

router.route("/get-current-user-avatar").get(
    verifyJWT,
    getUserAvatar
)

router.route("/google").post(
    googleHandled
)


export default router