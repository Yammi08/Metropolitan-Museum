import express from 'express';
const router = express.Router();

router.get('/',async (req,res)=>
{
    res.status(200).render('index',);
     
})
export default router;