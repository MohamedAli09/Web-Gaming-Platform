export class UI {
        displayAllGamesDetails(result) {
         
            let carton = "";

            for(let i = 0; i < result.length; i++) {
                carton += 
                `
                <div class="col"> 
                <div data-id="${result[i].id}" class="card h-100 bg-transparent" role="button">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100" src="${result[i].thumbnail}" />
                        </figure>f
                
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class="h6 small">${ result[i].title } </h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                
                            <p class="card-text small text-center opacity-50">
                            ${result[i].short_description.split(" ", 8)}

                            </p>
                        </figcaption>
                    </div>
                
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">${result[i].genre}</span>
                        <span class="badge badge-color">${result[i].platform}</span>
                    </footer>
                </div>
                </div>
                
                `            
            }
            
            let row = document.querySelector(".games .row")
            row.innerHTML = carton
   }  


   displayOneGameDetails(array) {
    console.log(array);
        let carton = 
        `
        <div class="header d-flex justify-content-between">
        <h1 class="text-light">Details Game</h1>
        <button class="btn-close btn-close-white" id="btnClose"></button>                        </div>

<div class="row">
    <div class="col-md-4 mt-4">
        <figure>
            <img src="${array.thumbnail}" class="w-100" alt="image details" />
        </figure>
    </div>
    <div class="col-md-8">
        <h3>Title: ${array.title}</h3> 
        <p>Category: <span class="badge text-bg-info">${array.genre}</span></p>
        <p>Platform: <span class="badge text-bg-info">${array.platform}</span></p>
        <p>Status: <span class="badge text-bg-info"> ${array.status} </span></p>
       
        <p class="small">
        ${array.description}
        </p>
        <a class="btn btn-outline-warning" target="_blank" href="https://www.freetogame.com/open/lost-ark">Show Game</a>
    </div>
</div>
        `;
       let box = document.querySelector(".details .box")
       box.innerHTML = carton;
   }

}