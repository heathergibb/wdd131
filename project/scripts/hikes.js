const hikes = [
    {
        hikeName: "Crypt Lake",
        park: "Waterton",
        distance: 18.8, //km
        elevation: 855, //meters
        difficulty: "Hard",
        type: "Out and Back",
        description: "The Crypt Lake hike is one of the most iconic and challenging hikes in the area, offering breathtaking scenery and unique features along the trail.",
        imageLoc: "images/crypt-lake.webp"
    },
    {
        hikeName: "Bertha Lake",
        park: "Waterton",
        distance: 11.7, //km
        elevation: 589, //meters
        difficulty: "Moderate",
        type: "Out and Back",
        description: "Bertha Lake hike offers a moderate trek through lush forests to reach the picturesque Bertha Falls, culminating in the tranquil shores of Bertha Lake, surrounded by majestic peaks and vibrant alpine flora.",
        imageLoc: "images/bertha-falls.webp"
    
    },
    {
        hikeName: "Bear's Hump",
        park: "Waterton",
        distance: 2.4, //km
        elevation: 217, //meters
        difficulty: "Moderate",
        type: "Out and Back",
        description: "Bear's Hump hike is a short but steep ascent offering panoramic views of Waterton Village, Upper Waterton Lake, and the surrounding mountain ranges, providing an excellent vantage point for sunset or sunrise photography.",
        imageLoc: "images/bears-hump.webp"
    },
    {
        hikeName: "Carthew / Alderson (Cameron Falls to Cameron Lake)",
        park: "Waterton",
        distance: 19, //km
        elevation: 788, //meters
        difficulty: "Hard",
        type: "Point to Point",
        description: "This hike is a challenging yet rewarding trek that traverses diverse landscapes, including lush forests, alpine meadows, and rocky terrain, offering stunning views of Cameron Falls and culminating at the serene Cameron Lake, where hikers can enjoy the tranquility of the pristine alpine setting.",
        imageLoc: "images/cameron-falls.webp"
    },
    {
        hikeName: "Johnston Canyon to Upper Falls",
        park: "Banff",
        distance: 5.5, //km
        elevation: 274, //meters
        difficulty: "Easy",
        type: "Out and Back",
        description: "Johnston Canyon to Upper Falls is a cherished favorite of my family in Banff National Park, celebrated for its scenic canyon vistas, enchanting waterfalls, and easy-to-navigate trails perfect for hikers of all ages.",
        imageLoc: "images/johnston-canyon.webp"
    },
    {
        hikeName: "Rockbound Lake",
        park: "Banff",
        distance: 18, //km
        elevation: 934, //meters
        difficulty: "Hard",
        type: "Out and Back",
        description: "This hike offers adventurers a challenging but rewarding trek through dense forests and rugged terrain, culminating in the stunning alpine beauty of Rockbound Lake, surrounded by towering peaks and serene wilderness.",
        imageLoc: "images/rockbound.webp"
    },
    {
        hikeName: "Boom Lake",
        park: "Banff",
        distance: 10.3, //km
        elevation: 441, //meters
        difficulty: "Moderate",
        type: "Out and Back",
        description: "The Boom Lake hike provides a peaceful journey through dense forests, leading to the tranquil shores of Boom Lake, where hikers can enjoy serene mountain reflections and the pristine beauty of the Canadian Rockies.",
        imageLoc: "images/boom-lake.webp"
    },
    {
        hikeName: "Skyline",
        park: "Jasper",
        distance: 44.9, //km
        elevation: 1560, //meters
        difficulty: "Very Hard",
        type: "Point to Point",
        description: "The Skyline hike offers a challenging yet awe-inspiring journey through alpine meadows, rugged ridges, and breathtaking vistas.",
        imageLoc: "images/skyline.webp"
    },
    {
        hikeName: "Edith Cavell Meadows",
        park: "Jasper",
        distance: 7.4, //km
        elevation: 555, //meters
        difficulty: "Hard",
        type: "Out and Back",
        description: "This hike takes adventurers through alpine meadows adorned with colorful wildflowers, offering stunning views of glaciers, towering peaks, and the iconic Angel Glacier, making it a must-do experience for nature lovers and photographers alike.",
        imageLoc: "images/edith-cavell-meadows.webp"
    },
    {
        hikeName: "Valley of Five Lakes",
        park: "Jasper",
        distance: 4.8, //km
        elevation: 161, //meters
        difficulty: "Easy",
        type: "Loop",
        description: "This hike offers a leisurely stroll through lush forests and open meadows, leading to a series of five stunning turquoise lakes surrounded by picturesque mountain scenery, providing a perfect setting for a serene nature retreat or a family-friendly outing.",
        imageLoc: "images/valley-of-the-5-lakes.webp"
    },
    {
        hikeName: "Sulphur Skyline (from Miette Hot Springs)",
        park: "Jasper",
        distance: 7.9, //km
        elevation: 656, //meters
        difficulty: "Moderate",
        type: "Out and Back",
        description: "The Sulphur Skyline offers a challenging ascent to panoramic views from the summit, where hikers are rewarded with breathtaking vistas of the surrounding mountain ranges.",
        imageLoc: "images/sulpur-skyline.webp"
    },
    {
        hikeName: "Consolation Lake",
        park: "Banff",
        distance: 3.6, //km
        elevation: 85, //meters
        difficulty: "Easy",
        type: "Out and Back",
        description: "The trailhead for Consolation Lake is located at the Moraine Lake parking lot. The trail winds through a picturesque forest. Consolation Lake offers excellent opportunities for photography, with its crystal-clear waters reflecting the surrounding mountain scenery.",
        imageLoc: "images/consolation-lake.webp"
    }
];

const chkJasper = document.querySelector("#jasper");
const chkBanff = document.querySelector("#banff");
const chkWaterton = document.querySelector("#waterton");

const sortDifficulty = document.querySelector("#difficulty");
const sortDistance = document.querySelector("#distance");
const sortElevation = document.querySelector("#elevation");

sortDifficulty.addEventListener("click",() => sortByDifficulty());
sortDistance.addEventListener("click",() => sortByDistance());
sortElevation.addEventListener("click",() => sortByElevation());

document.addEventListener('DOMContentLoaded', (event) => {
    setCheckbox(chkJasper);
    setCheckbox(chkBanff);
    setCheckbox(chkWaterton);
    displayHikes(filterHikes());
});

function setCheckbox(checkbox) {
    storedValue = localStorage.getItem(checkbox.id);
    localStorage.setItem(checkbox.id,"off");
}

function displayHikes(hikeList) { 
    const hikeCardContainer = document.querySelector("#hike-cards-container");
    hikeCardContainer.innerHTML = "";
    hikeList.forEach(hike => {
        //create card
        const hikeCard = document.createElement("figure");
        const hikeName = document.createElement("h2");
        const hikeDetails = document.createElement("div");
        const hikePark = document.createElement("p");
        const hikeDistance = document.createElement("p");
        const hikeElevation = document.createElement("p");
        const hikeDifficulty = document.createElement("p");
        const hikeType = document.createElement("p");
        const hikeDesc = document.createElement("p");
        const hikeImg = document.createElement("img");

        hikeCard.className = "hike-card";

        //title
        hikeName.textContent = hike.hikeName;
        hikeName.className = "card-title";
        hikeCard.appendChild(hikeName);

        //image
        hikeImg.setAttribute("src", hike.imageLoc);
        hikeImg.setAttribute("alt", `${hike.hikeName} hike`);
        hikeImg.setAttribute("loading", "lazy");
        hikeImg.width = 300;
        hikeImg.height = 225;
        hikeCard.appendChild(hikeImg);

        //details
        hikeDetails.className = "hike-details";

        hikePark.innerHTML = `<span class="label">Park: </span>${hike.park}`;
        hikeDetails.appendChild(hikePark);

        hikeDistance.innerHTML = `<span class="label">Distance: </span>${hike.distance} km`;
        hikeDetails.appendChild(hikeDistance);

        hikeElevation.innerHTML = `<span class="label">Elevation: </span>${hike.elevation} m`;
        hikeDetails.appendChild(hikeElevation);

        hikeDifficulty.innerHTML = `<span class="label">Difficulty: </span>${hike.difficulty}`;
        hikeDetails.appendChild(hikeDifficulty);

        hikeType.innerHTML = `<span class="label">Type: </span>${hike.type}`;
        hikeDetails.appendChild(hikeType);

        hikeCard.appendChild(hikeDetails);

        hikeDesc.innerHTML = hike.description;
        hikeDesc.className = "hike-desc";
        hikeCard.appendChild(hikeDesc);
        
        hikeCardContainer.appendChild(hikeCard);
    });
}

function filterHikes() {
    let retString = localStorage.getItem("newHikeList");
    let retArray = JSON.parse(retString);

    let newHikeList = hikes;

    if (retArray === null) {
        localStorage.setItem("newHikeList",JSON.stringify(hikes));   
    }
    else {
        const jasper = localStorage.getItem("jasper") || "off";
        const banff = localStorage.getItem("banff") || "off";
        const waterton = localStorage.getItem("waterton") || "off";
        // if all parks are checked or if all parks are unchecked -> return all hikes
        if ((jasper === "on" && banff === "on" && waterton === "on") || (jasper === "off" && banff === "off" && waterton === "off")) {
            newHikeList = hikes;
        }
        else {  //filter parks using each checkbox value
            
            if (jasper === "off") { //if jasper is unchecked, remove all jasper hikes
                newHikeList = newHikeList.filter(hike => (hike.park.toLowerCase() !== "jasper"));
            }
            if (banff === "off") { //if banff is unchecked, remove all banff hikes
                newHikeList = newHikeList.filter(hike => (hike.park.toLowerCase() !== "banff"));
            }
            if (waterton === "off") { //if waterton is unchecked, remove all waterton hikes
                newHikeList = newHikeList.filter(hike => (hike.park.toLowerCase() !== "waterton"));
            } 
        }
    }    

    localStorage.setItem("newHikeList",JSON.stringify(newHikeList));
    return newHikeList;
}

function saveChange(element) {
    if (element.checked) {
        localStorage.setItem(element.id,"on");
    }
    else {
        localStorage.setItem(element.id,"off");
    }
    
    displayHikes(filterHikes());
}

function sortByDifficulty() {
    let easyArray = [];
    let moderateArray = [];
    let hardArray = [];
    let veryHardArray = [];

    let newArray = filterHikes();

    easyArray = newArray.filter(hike => (hike.difficulty.toLowerCase() === "easy"));
    moderateArray = newArray.filter(hike => (hike.difficulty.toLowerCase() === "moderate"));
    hardArray = newArray.filter(hike => (hike.difficulty.toLowerCase() === "hard"));
    veryHardArray = newArray.filter(hike => (hike.difficulty.toLowerCase() === "very hard"));

    let sortedArray = [].concat(easyArray, moderateArray, hardArray, veryHardArray);

    displayHikes(sortedArray);
}

function sortByDistance() {
    let sortedArray = filterHikes();

    sortedArray = sortedArray.sort((a, b) => a.distance - b.distance);
    displayHikes(sortedArray);
}

function sortByElevation() {
    let sortedArray = filterHikes();

    sortedArray = sortedArray.sort((a, b) => a.elevation - b.elevation);
    displayHikes(sortedArray);
}
