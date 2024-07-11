import express from 'express';
import { Create, deletedish, getDishes } from '../controllers/dishController.js';

const router = express.Router()

router.route("/create").post(Create);
router.route("/delete/:id").delete(deletedish);
router.route("/getdishes").get(getDishes);
export default router;