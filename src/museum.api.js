const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
const getIds = async ()=> await (await fetch(url)).json();
const getObjById = async (id)=>
{
    const nUrl = url+'/'+id; 
    const item = await fetch(nUrl);
    if(item.status == 400)
        return 400;
    return await (item).json();
}
const getObjByName = async (name)=>
{
    const nUrl = 'https://collectionapi.metmuseum.org/public/collection/v1'+'/search?q='+name;
    
    const item = await fetch(nUrl);
    if(item.status == 400)
        return 400;
    return await (item).json();
}
export default {
    getIds,
    getObjById,
    getObjByName
};
