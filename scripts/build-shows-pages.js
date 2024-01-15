//add title "Shows" and labels for tabletAndDesktop

//target parents container//
const showsTitleEl = document.querySelector(".shows__title");

//add title name
const showsTitleNameEl = document.createElement("h2");
showsTitleNameEl.classList.add("shows__title-name");
showsTitleNameEl.textContent = "Shows";
showsTitleEl.appendChild(showsTitleNameEl);

//target parents container
const showsSubheadTablet = document.querySelector(
  ".shows__subhead--tabletAndDesktop"
);

//add labels for tablet and desktop
const dateListItem = document.createElement("li");
dateListItem.classList.add("shows__date");
dateListItem.textContent = "date";
showsSubheadTablet.appendChild(dateListItem);

const venueListItem = document.createElement("li");
venueListItem.classList.add("shows__venue");
venueListItem.textContent = "venue";
showsSubheadTablet.appendChild(venueListItem);

const locationListItem = document.createElement("li");
locationListItem.classList.add("shows__location");
locationListItem.textContent = "location";
showsSubheadTablet.appendChild(locationListItem);

/// GET request for showdates

class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async getShows() {
    try {
      const response = await axios.get(
        `${this.baseUrl}showdates?api_key=${this.apiKey}`
      );
      const displayShows = response.data;

      // parents container
      const showsContainers = document.querySelector(".shows__list");

      displayShows.forEach((showdate) => {
        const itemEl = document.createElement("li");
        itemEl.classList.add("shows__cards");
        showsContainers.appendChild(itemEl);

        itemEl.addEventListener("click", function () {
          const allItems = document.querySelectorAll(".shows__cards");
          allItems.forEach((item) => {
            item.classList.remove("shows__cards--selected");
          });
          this.classList.toggle("shows__cards--selected");
        });

        const sublistEl = document.createElement("ul");
        sublistEl.classList.add("shows__cards--sublist");
        itemEl.appendChild(sublistEl);

        const dateText = "date";
        const subitemEl = document.createElement("li");
        subitemEl.classList.add("shows__label");
        subitemEl.innerText = dateText;
        sublistEl.appendChild(subitemEl);

        const newSubitemEl = document.createElement("li");
        newSubitemEl.classList.add("shows__info--date");

        const showdateNew = new Date(showdate.date);
        const correctDate = showdateNew.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "2-digit",
          year: "numeric",
        });
        newSubitemEl.textContent = correctDate;
        sublistEl.appendChild(newSubitemEl);

        const sublist_2El = document.createElement("ul");
        sublist_2El.classList.add("shows__cards--sublist");
        itemEl.appendChild(sublist_2El);

        const venueText = "venue";
        const subitem_2El = document.createElement("li");
        subitem_2El.classList.add("shows__label");
        subitem_2El.innerText = venueText;
        sublist_2El.appendChild(subitem_2El);

        const newSubitem_2El = document.createElement("li");
        newSubitem_2El.classList.add("shows__info--venue");
        newSubitem_2El.textContent = `${showdate.place}`;
        sublist_2El.appendChild(newSubitem_2El);

        const sublist_3El = document.createElement("ul");
        sublist_3El.classList.add("shows__cards--sublist");
        itemEl.appendChild(sublist_3El);

        const locationText = "location";
        const subitem_3El = document.createElement("li");
        subitem_3El.classList.add("shows__label");
        subitem_3El.innerText = locationText;
        sublist_3El.appendChild(subitem_3El);

        const newSubitem_3El = document.createElement("li");
        newSubitem_3El.classList.add("shows__info--location");
        newSubitem_3El.textContent = `${showdate.location}`;
        sublist_3El.appendChild(newSubitem_3El);

        const sublist_4El = document.createElement("ul");
        sublist_4El.classList.add("shows__cards--sublist");
        itemEl.appendChild(sublist_4El);

        const buttonText = "buy tickets";
        const buttonEl = document.createElement("button");
        buttonEl.classList.add("shows__button");
        buttonEl.innerText = buttonText;
        sublist_4El.appendChild(buttonEl);
      });

      console.log(displayShows);
    } catch (error) {
      console.error("Failed to display show", error);
    }
  }
}

const apiKey = "6748bc1f-abe2-40ad-8213-f950811ead8f";
const bandSiteApi = new BandSiteApi(apiKey);

async function displayShows() {
  try {
    await bandSiteApi.getShows();
  } catch (error) {
    console.error("Error", error);
  }
}

displayShows();
