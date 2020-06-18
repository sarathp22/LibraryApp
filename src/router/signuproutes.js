const express=require("express");
const singnupRouter=express.Router();
function router(nav)
{
    singnupRouter.get('/',(req,res)=>{
                                        res.render('signup',{
                                                                nav,
                                                                title:'Signup'
                                        });
    });
    return singnupRouter;
}
module.exports= router;