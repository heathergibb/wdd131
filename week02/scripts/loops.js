// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

  //ACTIVITY 3
const foodsElement = document.querySelector('#favorite-foods');
const placesElement = document.querySelector('places-lived');

function generateListMarkup(list, templateCallback) {
    return list.map(templateCallback).join("");
}

function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate)



  //ACTIVITY 2

// .forEach
//   const foodsElement = document.querySelector('#favorite-foods');
//   function createandAppendFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     foodsElement.appendChild(favoriteFood);
//   }
//   myInfo.favoriteFoods.forEach(createandAppendFoodItem);

// .map
// const foodsElement = document.querySelector('#favorite-foods');
// function mapFoodItem(food) {
//     let favoriteFood = document.createElement('li');
//     favoriteFood.textContent = food;
//     return favoriteFood;
// }
// or
// function mapFoodItemSmall(food) {
//     return `<li>${food}</li>`;
// }
// const foodListElements = myInfo.favoriteFoods.map(mapFoodItemSmall);
// //flatten the arrary of strings into one big string
// foodsElement.innerHTML = foodListElements.join("");

// or 
// const foodsElement = document.querySelector('#favorite-foods');
// const foodListElements =  myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// foodsElement.innerHTML = foodListElements.join("");

// OR we could in fact simplify this down to one line!
// document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`).join("");

// *** no loop

//   let favoriteFood1 = document.createElement("li");
//   favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
//   let favoriteFood2 = document.createElement("li");
//   favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
//   let favoriteFood3 = document.createElement("li");
//   favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
//   let favoriteFood4 = document.createElement("li");
//   favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
//   // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//   document.querySelector("#favorite-foods").appendChild(favoriteFood1);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood2);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood3);
//   document.querySelector("#favorite-foods").appendChild(favoriteFood4);
  