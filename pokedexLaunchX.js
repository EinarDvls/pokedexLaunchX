const fetchPokemon = () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/chikorita';
    fetch(url).then((res)=>{
        console.log(res);
        return res.json();
    }).then((data) =>{
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
    })
    }
//fetchPokemon();

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

pokeImage(
    
)

const imprimir = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value;
    console.log("hola" + pokeInput);
}