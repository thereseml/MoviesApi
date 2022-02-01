import { Service } from "../models/service"


window.onload = function() {

    // skapa header
    let headerdiv = document.createElement("div");
    document.body.append(headerdiv);

    // skapar header innehåll
    let headerh1 = document.createElement("h1")
    headerh1.innerText = "Vilken film vill du se? "
    let headerinput = document.createElement("input");
    headerinput.placeholder = "Sök efter en filmtitel..."
    let headerbutton = document.createElement("button");
    headerbutton.innerText = "SÖK"
    headerdiv.append(headerh1, headerinput, headerbutton);

    // skapar div till filmen
    let moviediv = document.createElement("div");
    document.body.append(moviediv);

    // event på sökknappen
    headerbutton.addEventListener("click", () => {

        // hämta värdet från input och fetcha från service
        let service = new Service(headerinput.value);

        service.getData().then((response) => {
        
            moviediv.innerText = "";

            //loopa listan med filmer
            for (let i = 0; i < response.Search.length; i++) {


                // hämta title, år och poser
            let movietitle = response.Search[i].Title;
            let movieyear = response.Search[i].Year;
            let movieposter = response.Search[i].Poster;

            // skapa html, där film och innehåll visas
            let movieh2 = document.createElement("h2");
            movieh2.innerHTML = movietitle;
            let movieh3 = document.createElement("h3");
            movieh3.innerHTML = movieyear;
            let poster = document.createElement("img");
            poster.src = movieposter;
            moviediv.append(movieh2, movieh3, poster);

            };

        });

    })
    
}; 

