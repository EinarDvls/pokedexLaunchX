console.log("hola explorers");
const fetchPokemon = () => {
    fetch(URL).then((res)=>{
        console.log(res);
        return res.json();
    })
}
fetchPokemon();