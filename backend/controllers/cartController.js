import { Cart } from "../models/cartSchema.js";


export const addToCart = async (req, res) => {
    const { userId, dishId, quantity } = req.body;
    try {
      console.log("userId is ", userId);
      let cart = await Cart.findOne({ user: userId });
      if (!cart) {
        cart = new Cart({ user: userId, items: [] });
      }
      console.log("cart is ", cart);
      console.log("Cart addition successful");
      console.log("dishId is ", dishId);
      const itemIndex = cart.items.findIndex(
        (item) => item.dish.toString() === dishId
      );
      console.log("itemIndex is ", itemIndex);
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity++;
      } else {
        cart.items.push({ dish: dishId, quantity });
      }
      console.log("cart is ", cart);
  
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      console.log(error);
    }
  };
export const removeFromCart = async (req, res) => {
    const { userId, dishId } = req.body;
    try {
        let cart = await Cart.findOne({ user: userId });
        if (cart) {
            cart.items = cart.items.filter(item => item.dish.toString() !== dishId);
            await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCart = async (req, res) => {
    const { id } = req.params;
    try {
        console.log("hello")
        const cart = await Cart.findOne({ user: id }).populate('items.dish');
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCartItem = async (req, res) => {
    const { userId, dishId, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ user: userId });
        if (cart) {
            const itemIndex = cart.items.findIndex(item => item.dish.toString() === dishId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity = quantity;
                await cart.save();
                res.status(200).json(cart);
            } else {
                res.status(404).json({ message: "Item not found in cart" });
            }
        } else {
            res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};