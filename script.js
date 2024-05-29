const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weightText = document.getElementById("weight");
const heightText = document.getElementById("height");
const hpText = document.getElementById("hp");
const attackText = document.getElementById("attack");
const defenseText = document.getElementById("defense");
const specialAttackText = document.getElementById("special-attack");
const specialDefenseText = document.getElementById("special-defense");
const speedText = document.getElementById("speed");
const image = document.getElementById("image");
const pokemonContainer = document.getElementById("pokemon-container");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const dangerLevel =document.getElementById("dangerLevel");
const dangerInfo =document.getElementById("danger");
const typeText =document.getElementById("types");

let pokemonData ="";
const statOutputArray =[hpText,attackText,defenseText,specialAttackText,specialDefenseText,speedText];
const statArray =["HP: ","Attack: ","Defense: ","Special Attack: ","Special Defense: ","Speed: "];

let pokemonImages = {};
const getPokemon =() =>{

typeText.textContent="";

fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value}`) .then((res) => res.json())
.then((data) => {
  let danger = 0;
  pokemonData = data;
  let j =2;
  const {types,id,name,height,weight,stats,sprites} = pokemonData;
  console.log(types);

  const [d] = types;
  console.log(d);
const {type} = d;
const {name:otherName} = type;
 console.log(otherName);

  const {back_default,back_shiny,front_default,front_shiny} = sprites;
const pokemonImages=[back_default,back_shiny,front_default,front_shiny];
 
console.log(pokemonImages);
  weightText.textContent = `Weight: ${weight}`;
  pokemonId.textContent = `ID: ${id}`;
  pokemonName.textContent = `Name: ${name.toUpperCase()}`;
  heightText.textContent = `Height: ${height}`;
  const typeNames = types.map(typeInfo => typeInfo.type.name).join(", ");

  typeText.textContent = `Types: ${typeNames.toUpperCase()}`; 


image.src = pokemonImages[j];

leftBtn.addEventListener("click",()=>{
    if(j ===0){alert("No more pictures to display!");}
    else {
        j--;
        image.src = pokemonImages[j];

    }
    
})
rightBtn.addEventListener("click",()=>{
    if(j ===3){alert("No more pictures to display!");}


        else{j++;
        image.src = pokemonImages[j];}
     
})



  const [stat1, stat2,stat3,stat4,stat5,stat6] = stats;
  count = 0;
  stats.forEach(Array => {
    const {base_stat} = Array;
    console.log(base_stat)
    statOutputArray[count].textContent = statArray[count]+base_stat
    count++

    danger += base_stat;
    console.log("danger level is"+danger)
    if (count ===6)
   

      {

if (danger <=100){

dangerLevel.textContent = `Danger Level: ${danger}*`
dangerInfo.textContent = "This pokemon is not very dangerous"

}
else if(danger <=200 && danger >=101) {

dangerLevel.textContent = `Danger Level: ${danger}**`
dangerInfo.textContent = "This pokemon somewhat dangerous aproach with care"
}
else {

dangerLevel.textContent = `Danger Level: ${danger}***`
dangerInfo.textContent = "This pokemon is extremely dangerous !!!"

        }
    
   
  }});


  console.log(data);
})
.catch((err) => {
   console.log(err);
   alert("Pokemon not found!");
});
}





searchButton.addEventListener("click",()=>{

    getPokemon()

})