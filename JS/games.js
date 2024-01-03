import { UI } from "./UI.js"; 
import { details } from "./details.js";


const instanceOfDisplay = new UI();  
const instanceOfDetails = new details(); 


export class games {

   constructor(){
      this.getGames("mmorpg");
      var active = document.querySelectorAll(".nav-item a");

      for (let i = 0; i < active.length; i++) {
        active[i].addEventListener("click", (e) => {
          // Remove "active" class from all anchors
          for (let j = 0; j < active.length; j++) {
            active[j].classList.remove("active");
          }
      
          // Add "active" class to the clicked anchor
          e.target.classList.add("active");
      
          // Call your getGames function with the clicked anchor's text
          this.getGames(e.target.textContent);
        });
      }
       
    }

   async getGames(category) {
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
  
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
      const response = await api.json();
      
      instanceOfDisplay.displayAllGamesDetails(response);
      this.clickedcard();
      loading.classList.add("d-none");
  
   }

   clickedcard(){
      let card = document.querySelectorAll(".card");
      for(let i = 0; i < card.length; i++) {
        card[i].addEventListener("click" , (e) => {
           const id = card[i].dataset.id
           instanceOfDetails.detailsOfSpecificGame(id)
           this.showDeatilsOfOneCard();
 
        })
      }

    }

   showDeatilsOfOneCard(){
      document.querySelector(".games").classList.add("d-none");
      document.querySelector(".navbar").classList.add("d-none");
      document.getElementById("imgOfHead").classList.add("d-none");
      document.querySelector(".details").classList.remove("d-none");
   }

}
