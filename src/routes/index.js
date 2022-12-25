import express from 'express';
const router = express.Router();

router.get('/',async (req,res)=>
{
    const items = [];
    
    
    res.status(200).render('index',{items});
     
})
export default router;