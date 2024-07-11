import express from 'express';
import { addToCart, getCart, removeFromCart, updateCartItem } from '../controllers/cartController.js';


const router = express.Router();

router.route("/add").post(addToCart);
router.route("/remove").post(removeFromCart);
router.route("/getcart/:id").get(getCart);
router.route("/update").post(updateCartItem);

export default router;