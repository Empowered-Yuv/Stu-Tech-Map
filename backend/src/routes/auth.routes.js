import { Router } from 'express'
import { loginMember } from '../controllers/auth.controller.js'


const router = Router()


router.route("/login").post(
    loginMember
)

export default router