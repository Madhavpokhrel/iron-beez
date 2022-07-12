import express from "express";
import { getRecommendedForYouBeforeLogin } from "../controllers/recommendedForYou";

const router = express.Router();

router.get("/recommended", getRecommendedForYouBeforeLogin)

export default router;
