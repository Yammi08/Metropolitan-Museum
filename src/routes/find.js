import express from 'express';
import museo from '../museum.api.js';
const router = express.Router();

router.get('/find',async (req,res)=>
{
    const items = [];
    res.status(200).render('find',{items});
});
router.get('/search-museum',async (req,res)=>
{
    const itemsId =await museo.getObjByName(req.query.search)
    const items = [];

    for(let id in itemsId.objectIDs)
    {
        const item = await museo.getObjById(itemsId.objectIDs[id]);
        items.push(await item);
    }
    res.status(200).render('find',{items});
});
export default router;