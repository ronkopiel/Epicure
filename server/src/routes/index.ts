import express from "express"
import chefs from "../routes/chefs.routes";
import dishes from "../routes/dishes.routes";
import restaurants from "../routes/restaurants.routes";
const router = express.Router();

router.use("/api/chefs", chefs) 
router.use("/api/dishes", dishes) 
router.use("/api/restaurants", restaurants) 

export default router;