import { createError } from "../error.js";
import Loan from "../models/Loan.js"
import User from "../models/User.js";

export const addLoan = async (req,res,next)=>{

    const newLoan = new Loan({userId:req.user.id, ...req.body});
    try{
        const savedLoan = await newLoan.save()
        res.status(200).json(savedLoan);
    }catch(err){
        next(err);
    }

}

export const updateLoan = async (req,res,next)=>{


    try{

        const loan = await Loan.findById(req.params.id)
        if (!loan)  return next(createError(404,"Loan not found!"))
        if(req.user.id === loan.userId){
        const updatedLoan = await Loan.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new: true}
        );
        res.status(200).json(updatedLoan);
        }else{
            return next(createError(403,"you can update only your loan"))
        }
    }
    catch(err){
        next(err)
    }

}


export const deleteLoan = async (req,res,next)=>{

    try{

        const loan = await Loan.findById(req.params.id)
        if (!loan)  return next(createError(404,"Loan not found!"))
        if(req.user.id === loan.userId){
       await Loan.findByIdAndUpdate(req.params.id,
        );
        res.status(200).json("loan has been deleted");
        }else{
            return next(createError(403,"you can delete only your loan"))
        }
    }catch(err){
        next(err)
    }
   
    
}

export const getLoan = async (req,res,next)=>{
    try{
        const loan = await Loan.findById(req.params.id)
        res.status(200).json(loan)
    }catch(err){
        next(err);
    }
}

export const getMyloan = async(req,res,next)=>{
    try{
            const loan = await Loan.find({"userId":{"$in":req.user.id}})
            res.status(200).json(loan)
        
    }catch(err){
        next(err)
    }
}

export const loangave = async(req,res,next)=>{
    try{
        const loan = await Loan.find({"userWhoPaid":{"$in":req.user.id}})
        res.status(200).json(loan)
    }catch(err){
        next(err)
    }
}

// export const getrandomLoan = async (req,res,next)=>{
//     try{
//         const loans = await Loan.aggregate([{$sample: {size: 40}}]);
//         res.status(200).json(loans); 
//     }catch(err){
//         next(err);
//     }
// }
export const getallLoans = async(req,res,next)=>{
    try{
        const loans = await Loan.find();
        res.status(200).json(loans);
    }catch(err){
        next(err);
    }
}


// export const getRooms = async (req, res, next) => {
//     try {
//       const rooms = await Room.find();
//       res.status(200).json(rooms);
//     } catch (err) {
//       next(err);
//     }
//   };

// export const paid = async(req,res,next)=>{
//     try{
//         const user= await User.findById(req.uesr.id)
//         const alreadyPaidUsers = user.peopleYouPaid;

//         const list = Promise.all
//     }
// }

export const payment = async(req,res,next)=>{
    try{

        await Loan.findByIdAndUpdate(req.params.id,{
            $set:{userWhoPaid:req.user.id}
        })
        await Loan.findByIdAndUpdate(req.params.id,{
            $set:{pay:true}
        })
        res.status(200).json("paid succesfully")
    }catch(err){
        next(err);
    }
}