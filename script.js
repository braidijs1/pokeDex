const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchInput2 = document.getElementById("search-input2");
const searchButton2 = document.getElementById("search-button2");
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
const pokemonName2 = document.getElementById("pokemon-name2");
const pokemonId2 = document.getElementById("pokemon-id2");
const weightText2 = document.getElementById("weight2");
const heightText2 = document.getElementById("height2");
const hpText2 = document.getElementById("hp2");
const attackText2 = document.getElementById("attack2");
const defenseText2 = document.getElementById("defense2");
const specialAttackText2 = document.getElementById("special-attack2");
const specialDefenseText2 = document.getElementById("special-defense2");
const speedText2 = document.getElementById("speed2");
const image2 = document.getElementById("image2");
const pokemonContainer2 = document.getElementById("pokemon-container2");
const leftBtn2 = document.getElementById("leftBtn2");
const rightBtn2 = document.getElementById("rightBtn2");
const dangerLevel2 =document.getElementById("dangerLevel2");
const dangerInfo2 =document.getElementById("danger2");
const typeText2 =document.getElementById("types2");
const comparisonText = document.getElementById("comparisonText");
const comparisonDiv = document.getElementById("pokemon-container3");


let pokemonData ="";
const statOutputArray =[hpText,attackText,defenseText,specialAttackText,specialDefenseText,speedText];
const statOutputArray2 =[hpText2,attackText2,defenseText2,specialAttackText2,specialDefenseText2,speedText2];
const statArray =["HP: ","Attack: ","Defense: ","Special Attack: ","Special Defense: ","Speed: "];

let pokemonImages = {};
const getPokemon =(pokemonNo) =>{
  let danger1 = 0;
typeText.textContent="";
if(pokemonNo===1){
fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`) .then((res) => res.json())
.then((data) => {
 
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
 


  weightText.textContent = `Weight: ${weight}`;
  pokemonId.textContent = `ID: ${id}`;
  pokemonName.textContent = `Name: ${name.toUpperCase()}`;
  heightText.textContent = `Height: ${height}`;
  const typeNames = types.map(typeInfo => typeInfo.type.name).join(", ");

  typeText.textContent = `Types: ${typeNames.toUpperCase()}`; 


image.src = pokemonImages[j];





  const [stat1, stat2,stat3,stat4,stat5,stat6] = stats;
  count = 0;
  stats.forEach(Array => {
    const {base_stat} = Array;
    console.log(base_stat)
    statOutputArray[count].textContent = statArray[count]+base_stat
    count++

    danger1 += base_stat;
    console.log("Power level is"+danger1)
    if (count ===6)
   

      {

if (danger1 <=100){

dangerLevel.textContent = `Power Level: ${danger1}*`
dangerInfo.textContent = "This pokemon is not very dangerous"

}
else if(danger1 <=200 && danger >=101) {

dangerLevel.textContent = `Power Level: ${danger1}**`
dangerInfo.textContent = "This pokemon somewhat dangerous aproach with care"
}
else {

dangerLevel.textContent = `Power Level: ${danger1}***`
dangerInfo.textContent = "This pokemon is extremely dangerous !!!"

        }
    
   
  }});

  pokemonContainer2.style.display = null;
  console.log(data);
})
.catch((err) => {
   console.log(err);
  
});
}
else{
  fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput2.value.toLowerCase()}`) .then((res) => res.json())
.then((data) => {
  
  let danger2 = 0;
  let pokemonData = data;
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
 


  weightText2.textContent = `Weight: ${weight}`;
  pokemonId2.textContent = `ID: ${id}`;
  pokemonName2.textContent = `Name: ${name.toUpperCase()}`;
  heightText2.textContent = `Height: ${height}`;
  const typeNames = types.map(typeInfo => typeInfo.type.name).join(", ");

  typeText2.textContent = `Types: ${typeNames.toUpperCase()}`; 


image2.src = pokemonImages[j];





  const [stat1, stat2,stat3,stat4,stat5,stat6] = stats;
  count = 0;
  stats.forEach(Array => {
    const {base_stat} = Array;
    console.log(base_stat)
    statOutputArray2[count].textContent = statArray[count]+base_stat
    count++

    danger2 += base_stat;
    console.log("Power level is"+danger2)
    if (count ===6)
   

      {

if (danger2 <=100){

dangerLevel2.textContent = `Power Level: ${danger2}*`
dangerInfo2.textContent = "This pokemon is not very dangerous"

}
else if(danger2 <=200 && danger2 >=101) {

dangerLevel2.textContent = `Power Level: ${danger2}**`
dangerInfo2.textContent = "This pokemon somewhat dangerous aproach with care"
}
else {

dangerLevel2.textContent = `Power Level: ${danger2}***`
dangerInfo2.textContent = "This pokemon is extremely dangerous !!!"

        }
    
   
  }});

  if(danger1 < danger2)
    {
       comparisonText.textContent = `${pokemonName2.textContent.substring(6)} is stronger than ${pokemonName.textContent.substring(6)}`
    }
    else{
     comparisonText.textContent = `${pokemonName.textContent.substring(6)} is stronger than ${pokemonName2.textContent.substring(6)}`
    }
   
   comparisonDiv.style.display =null;
  console.log(data);
})
.catch((err) => {
   console.log(err);
   
});
}

}



searchButton.addEventListener("click",()=>{

    getPokemon()

})






  