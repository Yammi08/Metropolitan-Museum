import museumApi from "./museum.api.js";
import metmuseum from "./museum.model.js";
const container = document.querySelector('.contenedor__items');


let code = async ()=>
{
    let info = '';
    for(let i = 0; i <= 3; i++)
    {
        
        let {title,primaryImage,artistBeginDate,artistEndDate,accessionYear,culture} = await museumApi.getObjById((i*100)+100);
        info = metmuseum.information(title,primaryImage,artistBeginDate,artistEndDate,accessionYear,culture);
        container.innerHTML += info;
    }
}
code();
