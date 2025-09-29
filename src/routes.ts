import { Router } from "express";
import { getAllTask, getTasks } from "./controller";

const router = Router();

router.get("/", getTasks);
router.get("/tasks", getAllTask);
export default router;