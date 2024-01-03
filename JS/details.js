import { UI } from "./UI.js"; 
const instanceOfDisplay = new UI();

export class details {
  constructor() {

 
   }

  async  detailsOfSpecificGame(idGames) {
	  
		const loading = document.querySelector(".loading");
		loading.classList.remove("d-none");
  
		const options = {
		   method: "GET",
		   headers: {
			  "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
			  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
			  Accept: "application/json",
			  "Content-Type": "application/json",
		   },
		};
	
		const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options);

		const response = await api.json();
    
    instanceOfDisplay.displayOneGameDetails(response);
    this.handelClosecOneCard();
    
     loading.classList.add("d-none");
 
 		
		
	 
	 
  }

  handelClosecOneCard(){
    const btnClose = document.getElementById("btnClose");
    btnClose.addEventListener("click", function(){
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".navbar").classList.remove("d-none");
      document.getElementById("imgOfHead").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");


    })
  }
    
}


 