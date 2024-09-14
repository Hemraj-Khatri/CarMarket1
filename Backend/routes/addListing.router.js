import express from "express";
import {
  AddListing,
  allListings,
<<<<<<< HEAD
  getListById,
=======
  getCertifiedListings,
  getListById,
  getNewListings,
  getUsedListings,
>>>>>>> 95fd6f6 (condition page completed)
  recentListings,

} from "../controller/addListing.controller.js";
import  { checkAdmin, checkAuth } from "../middleware/auth.user.js";
const router = express.Router();

router.post("/addListing", checkAuth, AddListing);
router.get("/allListings", allListings);
router.get("/recentListings", recentListings);
<<<<<<< HEAD
=======
router.get("/newListings", getNewListings);
router.get("/usedListings", getUsedListings);
router.get("/certifiedListings", getCertifiedListings);
>>>>>>> 95fd6f6 (condition page completed)
router.get("/:id", getListById);
export default router;
