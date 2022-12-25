/*const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
fetch(url).then(res=>res.json())
.then(items=> console.log(items));
console.log('Execute');*/

import museo from './museum.api.js';

/*
for(let i = 0;i < 6;i++)
    {
        let {title,culture,accessionYear,creditLine,artistBeginDate,artistEndDate,primaryImage} = await museo.getObjById((501+(i*100)));
        culture = culture == '' ? 'no information of culture' : culture;
        
        const item = {
            accessionYear,
            primaryImage,
            artistBeginDate,
            artistEndDate,
            culture,
            creditLine,
            title
        };
        
        items.push(item);
    }
    */