const apiKey = "60bff716"
const nomeFilme = document.getElementById("filme")
const URL = `https://omdbapi.com/?s=${nomeFilme}&page=1&apikey=${apiKey}`;
var retorno = null
// load movies from API
async function loadMovies(nomeFilme){
    retorno = await fetch(`${URL}`)
        .then((Response) => {
            if(Response.ok) {
                Response.json().then((json) => {
                    console.log(json.Search)  
                })
            }
        })
}
