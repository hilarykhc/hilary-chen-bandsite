//DATA STRUCTURE

const shows = [
  {
    label1: "date",
    date: "Mon Sep 06 2021",
    label2: "venue",
    venue: "Ronald Lane",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Tue Sep 21 2021",
    label2: "venue",
    venue: "Pier 3 East",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Fri Oct 15 2021",
    label2: "venue",
    venue: "View Lounge",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Sat Nov 06 2021",
    label2: "venue",
    venue: "Hyatt Agency",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Fri Nov 26 2021",
    label2: "venue",
    venue: "Moscow Center",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },

  {
    label1: "date",
    date: "Wed Dec 15 2021",
    label2: "venue",
    venue: "Press Club",
    label3: "location",
    location: "San Francisco, CA",
    button: "buy tickets",
  },
];

//parents container
const showsContainers = document.querySelector(".shows__list");

//<div class="shows__title">
//const divEl = document.createElement("div");
//divEl.classList.add("shows__title");
//concertsContainers.appendChild(divEl);

//<h2 class="shows__title-name">
//const h2El = document.createElement("h2");
//h2El.classList.add("shows__title-name");

for (let i = 0; i < shows.length; i++) {
  let showsObj = shows[i];
  createShowsCard(showsObj);
}

function createShowsCard(showsData) {
  // <li class="shows__cards">
  const itemEl = document.createElement("li");
  itemEl.classList.add("shows__cards");
  showsContainers.appendChild(itemEl);

  //<ul class="shows__cards--sublist">
  const sublistEl = document.createElement("ul");
  sublistEl.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublistEl);

  //<li class="shows__label">date</li>
  //<li class="shows__info--date">Mon Sep 06,2021</li>
  const subitemEl = document.createElement("li");
  subitemEl.classList.add("shows__label");
  subitemEl.innerText = showsData.label1;
  sublistEl.appendChild(subitemEl);

  const newSubitemEl = document.createElement("li");
  newSubitemEl.classList.add("shows__info--date");
  newSubitemEl.innerText = showsData.date;
  sublistEl.appendChild(newSubitemEl);

  //<ul class="shows__cards--sublist">
  const sublist_2El = document.createElement("ul");
  sublist_2El.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublist_2El);

  //<li class="shows__label">venue</li>
  //<li class="shows__info--venue">Ronald Lane</li>
  const subitem_2El = document.createElement("li");
  subitem_2El.classList.add("shows__label");
  subitem_2El.innerText = showsData.label2;
  sublist_2El.appendChild(subitem_2El);

  const newSubitem_2El = document.createElement("li");
  newSubitem_2El.classList.add("shows__info--venue");
  newSubitem_2El.innerText = showsData.venue;
  sublist_2El.appendChild(newSubitem_2El);

  //<ul class="shows__cards--sublist">
  const sublist_3El = document.createElement("ul");
  sublist_3El.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublist_3El);

  //<li class="shows__label">location</li>
  //<li class="shows__info--location">San Franciso, CA</li>
  const subitem_3El = document.createElement("li");
  subitem_3El.classList.add("shows__label");
  subitem_3El.innerText = showsData.label3;
  sublist_3El.appendChild(subitem_3El);

  const newSubitem_3El = document.createElement("li");
  newSubitem_3El.classList.add("shows__info--location");
  newSubitem_3El.innerText = showsData.location;
  sublist_3El.appendChild(newSubitem_3El);

  //<ul class="shows__cards--sublist">
  const sublist_4El = document.createElement("ul");
  sublist_4El.classList.add("shows__cards--sublist");
  itemEl.appendChild(sublist_4El);

  //<button class="shows__button">Buy Tickets</button>
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("shows__button");
  buttonEl.innerText = showsData.button;
  sublist_4El.appendChild(buttonEl);
}
