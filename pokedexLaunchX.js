const fetchpokemon = () =>{
    const url = ' https://pokeapi.co/api/v2/pokemon/chikorita';
    fetch(url).then((res)=> {
        return res.json();
    })
}