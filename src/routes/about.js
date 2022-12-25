import express from 'express';
const router = express.Router();

router.get('/about',async (req,res)=>
{
    res.status(200).render('about',{});
});
export default router;