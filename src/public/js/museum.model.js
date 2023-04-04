const information = (title,primaryImage,artistBeginDate,artistEndDate,accessionYear,culture)=>
{
    return `<div class="contenedor__informacion">
    <div class="contenedor__titulo">
        <h1 class="informacion__titulo">
            ${title}
        </h1>
    </div>
    <img class="informacion__imagen" src=${primaryImage} alt=${title}>
        <ol class="contendor__descripcion">
            <li class="informacion__descripcion">
                <h3 class="informacion__descripcion__titulo">date of picture:</h3>
                <p class="informacion__descripcion__detalle">
                    ${artistBeginDate} - ${artistEndDate}
                </p>
            </li>
            <li class="informacion__descripcion">
                <h3 class="informacion__descripcion__titulo">accession Year:</h3>
                <p class="informacion__descripcion__detalle">${accessionYear}</p>
            </li>
            <li class="informacion__descripcion">
                <h3 class="informacion__descripcion__titulo">culture:</h3>
                <p class="informacion__descripcion__detalle">${culture}</p>
            </li>
        </ol>
    </div>`
}
export default {
    information
};
