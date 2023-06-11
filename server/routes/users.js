import express from "express";
import { deleteUser, getUser, updateUser } from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//update user
router.put("/:id",verifyToken,updateUser)

//DELETE USER
router.delete("/:id",verifyToken,deleteUser)

//GET A USER
router.get("/find/:id",getUser)

// router.get("/myallLoans", getmyloans)

// router.put("/loan/:loanId",verifyToken,payUser)


export default router