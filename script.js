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
const dangerLevel = document.getElementById("dangerLevel");
const dangerInfo = document.getElementById("danger");
const typeText = document.getElementById("types");
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
const dangerLevel2 = document.getElementById("dangerLevel2");
const dangerInfo2 = document.getElementById("danger2");
const typeText2 = document.getElementById("types2");
const comparisonText = document.getElementById("comparisonText");
const comparisonDiv = document.getElementById("pokemon-container3");
const images = document.getElementById("images");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2")

let pokemonData = "";
let danger1 = 0; // Declare danger1 at the top
let danger2 = 0; // Declare danger2 at the top for the second Pokemon

const statOutputArray = [hpText, attackText, defenseText, specialAttackText, specialDefenseText, speedText];
const statOutputArray2 = [hpText2, attackText2, defenseText2, specialAttackText2, specialDefenseText2, speedText2];
const statArray = ["HP: ", "Attack: ", "Defense: ", "Special Attack: ", "Special Defense: ", "Speed: "];

let pokemonImages = {};

const getPokemon = (pokemonNo) => {
  typeText.textContent = "";
  if (pokemonNo === 1) {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput.value.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        pokemonData = data;
        let j = 2;
        const { types, id, name, height, weight, stats, sprites } = pokemonData;
        const [d] = types;
        const { type } = d;
        const { name: otherName } = type;
        const { back_default, back_shiny, front_default, front_shiny } = sprites;
        const pokemonImages = [back_default, back_shiny, front_default, front_shiny];
  pokeapi(sprites,1,searchInput.value.toLowerCase());
        weightText.textContent = `Weight: ${weight}`;
        pokemonId.textContent = `ID: ${id}`;
        pokemonName.textContent = `Name: ${name.toUpperCase()}`;
        heightText.textContent = `Height: ${height}`;
        const typeNames = types.map(typeInfo => typeInfo.type.name).join(", ");
        typeText.textContent = `Types: ${typeNames.toUpperCase()}`;


        const [stat1, stat2, stat3, stat4, stat5, stat6] = stats;
        let count = 0;
        danger1 = 0; // Reset danger1 for each fetch
        stats.forEach(stat => {
          const { base_stat } = stat;
          statOutputArray[count].textContent = statArray[count] + base_stat;
          danger1 += base_stat;
          count++;
          if (count === 6) {
            dangerLevel.textContent = `Power Level: ${danger1}`;
            if (danger1 <= 300) {
              dangerInfo.textContent = "Weak";
            } else if (danger1 >= 301 && danger1 < 401) {
              dangerInfo.textContent = "Average";
            } else if (danger1 >= 401 && danger1 < 600) {
              dangerInfo.textContent = "Strong";
            } else {
              dangerInfo.textContent = "Very Strong";
            }
          }
        });

        pokemonContainer2.style.display = null;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchInput2.value.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        pokemonData = data;
        let j = 2;
        const { types, id, name, height, weight, stats, sprites } = pokemonData;
        const [d] = types;
        const { type } = d;
        const { name: otherName } = type;
        const { back_default, back_shiny, front_default, front_shiny } = sprites;
        const pokemonImages = [back_default, back_shiny, front_default, front_shiny];
        pokeapi(sprites,2,searchInput2.value.toLowerCase());
        weightText2.textContent = `Weight: ${weight}`;
        pokemonId2.textContent = `ID: ${id}`;
        pokemonName2.textContent = `Name: ${name.toUpperCase()}`;
        heightText2.textContent = `Height: ${height}`;
        const typeNames = types.map(typeInfo => typeInfo.type.name).join(", ");
        typeText2.textContent = `Types: ${typeNames.toUpperCase()}`;
       

        const [stat1, stat2, stat3, stat4, stat5, stat6] = stats;
        let count = 0;
        danger2 = 0; // Reset danger2 for each fetch
        stats.forEach(stat => {
          const { base_stat } = stat;
          statOutputArray2[count].textContent = statArray[count] + base_stat;
          danger2 += base_stat;
          count++;
          if (count === 6) {
            dangerLevel2.textContent = `Power Level: ${danger2}`;
            if (danger2 <= 300) {
              dangerInfo2.textContent = "Weak";
            } else if (danger2 >= 301 && danger2 < 401) {
              dangerInfo2.textContent = "Average";
            } else if (danger2 >= 401 && danger2 < 600) {
              dangerInfo2.textContent = "Strong";
            } else {
              dangerInfo2.textContent = "Very Strong";
            }
          }
        });

        if (danger1 < danger2) {
          comparisonText.textContent = `${pokemonName2.textContent.substring(6)} is stronger than ${pokemonName.textContent.substring(6)}`;
        } else {
          comparisonText.textContent = `${pokemonName.textContent.substring(6)} is stronger than ${pokemonName2.textContent.substring(6)}`;
        }
        comparisonDiv.style.display = null;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

searchButton.addEventListener("click", () => {
  getPokemon(1);
});

searchButton2.addEventListener("click", () => {
  getPokemon(2);
});

function pokeapi(sprites,pokeNo,searchInput) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        const pokemonData = data;
          console.log(pokemonData);
          
        if(pokeNo === 1){
         div1.style.display = null;
          // Get keys that include an underscore
          const keysArray = Object.keys(pokemonData.sprites).filter(key => key.includes('_'));
          console.log(keysArray);
          
          // Populate the dropdown
          const imagesSelect = document.getElementById('images');
          imagesSelect.innerHTML= null;
          keysArray.forEach(key => {
              if (pokemonData.sprites[key]) { // Ensure there's a valid URL
                key =  key.replace(/_/g," ").toUpperCase();
                  imagesSelect.innerHTML += `
                      <option value="${key}">${key}</option>
                  `;
              }
          });

          imagesSelect.addEventListener('change', function() {
              const selectedKey = this.value.replace(/ /g,"_").toLowerCase();
              const imageUrl = sprites[selectedKey];
              const imagesDiv = document.getElementById('imagesDiv');
              
              if (imageUrl) {
                  imagesDiv.innerHTML = `<img src="${imageUrl}" alt="${selectedKey}">`;
              } else {
                  imagesDiv.innerHTML = 'No image available';
              }
          });

          // Trigger the change event to display the first image by default
          imagesSelect.dispatchEvent(new Event('change'));
        }
        else{
  // Get keys that include an underscore
  const keysArray = Object.keys(pokemonData.sprites).filter(key => key.includes('_'));
  console.log(keysArray);
  div2.style.display = null;
  // Populate the dropdown
  const imagesSelect = document.getElementById('images2');
  imagesSelect.innerHTML= null;
  keysArray.forEach(key => {
      if (pokemonData.sprites[key]) { // Ensure there's a valid URL
         key =  key.replace(/_/g," ").toUpperCase();
        imagesSelect.innerHTML += `
              <option value="${key}">${key}</option>
          `;
      }
  });

  imagesSelect.addEventListener('change', function() {
      const selectedKey = this.value.replace(/ /g,"_").toLowerCase();
      const imageUrl = sprites[selectedKey];
    
      const imagesDiv = document.getElementById('imagesDiv2');
      
      if (imageUrl) {
          imagesDiv.innerHTML = `<img src="${imageUrl}" alt="${selectedKey}">`;
      } else {
          imagesDiv.innerHTML = 'No image available';
      }
  });

  // Trigger the change event to display the first image by default
  imagesSelect.dispatchEvent(new Event('change'));
}
      });
}

