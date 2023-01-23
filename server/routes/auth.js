import { Router } from "express";
import { register, login, getMe } from "../controllers/authUser.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//Registration
router.post("/register", register);
//login
router.post("/login", login);
//getme
router.get("/me", checkAuth, getMe);

export default router;
