//Footer info
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

//Hamburger Menu
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

//Temples
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/temples/aba-nigeria-temple-lds-273999-wallpaper.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/temples/manti-temple-768192-wallpaper.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/temples/payson-utah-temple-exterior-1416671-wallpaper.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/temples/yigo_guam_temple_2.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/temples/washington_dc_temple-exterior-2.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/temples/lima-peru-temple-evening-1075606-wallpaper.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/temples/mexico-city-temple-exterior-1518361-wallpaper.webp"
  },
  {
    templeName: "Anchorage Alaska",
    location: "Anchorage, Alaska",
    dedicated: "1999, January, 9-10",
    area: 11937,
    imageUrl:
    "images/temples/anchorage-temple-lds-253274-wallpaper.webp"
	},
	{
    templeName: "Seoul Korea",
    location: "Seoul, Korea",
    dedicated: "1985, December, 14-15",
    area: 28057,
    imageUrl:
    "images/temples/seoul-korea-temple-lds-424784-wallpaper.webp"
	},
	{
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6-8",
    area: 143969,
    imageUrl:
    "images/temples/st-george-temple-lds-947136-wallpaper.webp"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
});

function displayTemples(templeList) {
  const container = document.getElementById("temples-grid");
  container.innerHTML = "";

  templeList.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");
    templeCard.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq. ft.</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    container.appendChild(templeCard);
  });
}

function filterTemples(criteria) {
  let filteredTemples;
  switch (criteria) {
    case "old":
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      break;
    case "new":
      filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      break;
    case "large":
      filteredTemples = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(t => t.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }
  displayTemples(filteredTemples);
}