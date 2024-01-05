//DATA STRUCTURE

const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    headshot: "grey circular object",
  },

  {
    name: "Emilie Beach",
    date: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    headshot: "grey circular object",
  },

  {
    name: "Miles Acosta",
    date: "12/20/2020",
    text: " I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    headshot: "grey circular object",
  },
];

//parents container
const commentsContainer = document.querySelector(
  ".display-comments__container"
);

for (let i = 0; i < comments.length; i++) {
  let commentsObj = comments[i];
  createCommentsCard(commentsObj);
}

function createCommentsCard(commentsData) {
  //   <section class="display-comments">
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("display-comments");
  commentsContainer.appendChild(sectionEl);

  //<ul class="display-comments__list" id="comments-list">
  const listEl = document.createElement("ul");
  listEl.classList.add("display-comments__list");
  listEl.setAttribute("id", "comments-list");
  sectionEl.appendChild(listEl);

  //<div class="display-comments__card" id="comments-list-1">
  const cardEl = document.createElement("div");
  cardEl.classList.add("display-comments__card");
  cardEl.setAttribute("id", "comments-list-1");
  listEl.appendChild(cardEl);

  //<div class="comments__img--none"></div>
  const imgEl = document.createElement("div");
  imgEl.classList.add("comments__img--none");
  cardEl.appendChild(imgEl);

  //<div class="display-comments__content">
  const contentEl = document.createElement("div");
  contentEl.classList.add("display-comments__content");
  cardEl.appendChild(contentEl);

  //<div class="display-comments__name-date">
  const nameDateEl = document.createElement("div");
  nameDateEl.classList.add("display-comments__name-date");
  contentEl.appendChild(nameDateEl);

  // <p class="display-comments__name">Connor Walton</p>
  //<p class="display-comments__date">02/17/2021</p>

  const nameEl = document.createElement("p");
  nameEl.classList.add("display-comments__name");
  nameEl.innerText = commentsData.name;
  nameDateEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("display-comments__date");
  dateEl.innerText = commentsData.date;
  nameDateEl.appendChild(dateEl);

  // <div>
  //     <p class="display-comments__text"></p>
  const divEl = document.createElement("div");
  contentEl.appendChild(divEl);

  const textEl = document.createElement("p");
  textEl.classList.add("display-comments__text");
  textEl.innerText = commentsData.text;
  divEl.appendChild(textEl);
}

// ///// //

document.addEventListener("DOMContentLoaded", function () {
  const commentsContainer = document.querySelector(
    ".display-comments__container"
  );
  const form = document.getElementById("form");

  // Event listener for form
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    // Create new comment object
    const newComment = {
      name: name,
      date: currentDate,
      text: comment,
      headshot: "grey circular object", // Add a default headshot or update it based on user input
    };

    // Add new comment to comments array
    comments.unshift(newComment);

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";

    // Clear existing comments in the display
    commentsContainer.innerHTML = "";

    // Render all comments, including the new one
    for (let i = 0; i < comments.length; i++) {
      let commentsObj = comments[i];
      createCommentsCard(commentsObj);
    }
  });
});
