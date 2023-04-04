import express from 'express';
import museo from '../config/museum.api.js';
const router = express.Router();

router.get('/find',async (req,res)=>
{
    const items = [];
    res.status(200).render('find',{items});
});
router.get('/search-museum',async (req,res)=>
{
    const itemsId = req.query.search == ""? {objectIDs:[]} : await museo.getObjByName(req.query.search);
    res.status(200).render('find',{items:itemsId.objectIDs});
});
export default router;