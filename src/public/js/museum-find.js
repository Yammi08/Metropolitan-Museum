import museumApi from "./museum.api.js";
import metmuseum from "./museum.model.js";
const container = document.querySelector('.contenedor__imagenes');
let conse = async ()=>
{
    const names = [];
    for(let element of container.childNodes)
    {
        const item = await museumApi.getObjById(element.id);
        if(names.indexOf(item.title) == -1)
        {
            names.push(item.title);
            element.innerHTML += metmuseum.information(item.title,item.primaryImage,item.artistBeginDate,item.artistEndDate,item.accessionYear,item.culture);
        }
    }
}
conse();

let t =`
<div class="contenedor__informacion">
<div class="contened
    <h1 class="informacion__titulo">
        <%=items[item].title%>
    </h1>
</div>or__titulo">
<img class="informacion__imagen" src=<%=items[item].primaryImage%> alt=<%=items[item].title%>>
    <ol class="contendor__descripcion">
        <li class="informacion__descripcion">
            <h3 class="informacion__descripcion__titulo">date of picture:</h3>
            <p class="informacion__descripcion__detalle">
                <%if(items[item].artistBeginDate !='' && items[item].artistEndDate !='' ){%>
                    <%='('+items[item].artistBeginDate +' - '+ items[item].artistEndDate+' )'%>
                        <%}else{%>no date<%}%>
            </p>
        </li>
        <li class="informacion__descripcion">
            <h3 class="informacion__descripcion__titulo">accession Year:</h3>
            <p class="informacion__descripcion__detalle"><%=items[item].accessionYear%></p>
        </li>
        <li class="informacion__descripcion">
            <h3 class="informacion__descripcion__titulo">culture:</h3>
            <p class="informacion__descripcion__detalle"><%=items[item].culture%></p>
        </li>
    </ol>
</div>`;
