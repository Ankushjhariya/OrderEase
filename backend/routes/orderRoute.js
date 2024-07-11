import express from 'express';
import isAuthenticated from '../config/auth.js';
import { CreateOrder, getAllOrder, getOrder } from '../controllers/orderController.js';


const router = express.Router()
router.route("/create").post(CreateOrder);
router.route("/getorder/:id").get(isAuthenticated, getOrder);
router.route("/getallorder").get(getAllOrder);

export default router;