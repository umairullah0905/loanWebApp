import express from "express";
import { addLoan, deleteLoan, getLoan, getMyloan, getallLoans, loangave, payment, updateLoan } from "../controllers/loan.js"
import { verifyToken } from "../verifyToken.js";

const router = express.Router();


//create new loan
router.post("/",verifyToken,addLoan)
router.put("/:id",verifyToken,updateLoan)
router.delete("/:id",verifyToken,deleteLoan)
router.get("/find/:id",getLoan)
router.get("/allLoans",getallLoans)
router.get("/myloan", verifyToken,getMyloan)
router.get("/loangave", verifyToken,loangave)
router.put("/pay/:id",verifyToken,payment)








export default router