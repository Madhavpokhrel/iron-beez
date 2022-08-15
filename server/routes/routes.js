import express from "express";
import { signup, signin, activateAccount } from "../controllers/user.js";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/sign-in", signin);
router.get("/activate", activateAccount)

export default router;
