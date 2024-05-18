const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Calgary Alberta",
        location: "Calgary, Alberta, Canada",
        dedicated: "2012, October, 28",
        area: "33000",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
    },
    {
        templeName: "Preston England",
        location: "Chorley, Lancashire, England",
        dedicated: "1998, June, 7",
        area: 69630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-765114-wallpaper.jpg"
    }
];

const navButton = document.querySelector("#menu");
const navMenu = document.querySelector(".menu-links");
const homeLink = document.querySelector("#home"); //home link
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const title = document.querySelector("#title");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
})

window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 768) {
        navMenu.classList.remove("show");
        navButton.classList.remove("show");
    }
})

homeLink.addEventListener("click", () => {
    displayTemples(temples);
    title.textContent = "Home";
    navMenu.classList.remove("show");
});

oldLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (parseInt(temple.dedicated) < 1900)));
    title.textContent = "Old";  
    navMenu.classList.remove("show");  
});

newLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (parseInt(temple.dedicated) > 2000)));
    title.textContent = "New";
    navMenu.classList.remove("show");    
});

largeLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (temple.area > 90000)));
    title.textContent = "Large";   
    navMenu.classList.remove("show");  
});

smallLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (temple.area < 10000)));
    title.textContent = "Small";  
    navMenu.classList.remove("show");  
});

displayTemples(temples);

function displayTemples(templeList) {
    const templeCardContainer = document.querySelector("#temple-cards-container");
    templeCardContainer.innerHTML = "";
    templeList.forEach(temple => {
        //create card
        const templeCard = document.createElement("figure");
        const templeHeading = document.createElement("h3");
        const templeLocation = document.createElement("p");
        const templeDedicated = document.createElement("p");
        const templeSize = document.createElement("p");
        const templeImg = document.createElement("img");

        templeCard.className = "temple-card";

        //create title on card
        templeHeading.textContent = temple.templeName;
        templeHeading.className = "card-heading";
        templeCard.appendChild(templeHeading);

        //add details to card
        templeLocation.innerHTML = `<span class="label">Location: </span>${temple.location}`;
        templeCard.appendChild(templeLocation);

        templeDedicated.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
        templeCard.appendChild(templeDedicated);

        templeSize.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;
        templeCard.appendChild(templeSize);

        templeImg.setAttribute("src", temple.imageUrl);
        templeImg.setAttribute("alt", `Picture of ${temple.templeName} Temple`);
        templeImg.setAttribute("loading", "lazy");
        templeImg.width = 400;
        templeImg.height = 250;
        templeCard.appendChild(templeImg);

        templeCardContainer.appendChild(templeCard);
    });
}




