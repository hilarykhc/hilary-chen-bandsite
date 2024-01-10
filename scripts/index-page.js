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

//target parents container
const commentsContainer = document.querySelector(
  ".display-comments__container"
);

for (let i = 0; i < comments.length; i++) {
  let commentsObj = comments[i];
  createCommentsCard(commentsObj);
}

//function to create elements
function createCommentsCard(commentsData) {
  //new elements
  const sectionEl = document.createElement("section");
  sectionEl.classList.add("display-comments");
  commentsContainer.appendChild(sectionEl);

  const listEl = document.createElement("ul");
  listEl.classList.add("display-comments__list");
  listEl.setAttribute("id", "comments-list");
  sectionEl.appendChild(listEl);

  const cardEl = document.createElement("div");
  cardEl.classList.add("display-comments__card");
  cardEl.setAttribute("id", "comments-list-1");
  listEl.appendChild(cardEl);

  const imgEl = document.createElement("div");
  imgEl.classList.add("comments__img--none");
  cardEl.appendChild(imgEl);

  const contentEl = document.createElement("div");
  contentEl.classList.add("display-comments__content");
  cardEl.appendChild(contentEl);

  const nameDateEl = document.createElement("div");
  nameDateEl.classList.add("display-comments__name-date");
  contentEl.appendChild(nameDateEl);

  const nameEl = document.createElement("p");
  nameEl.classList.add("display-comments__name");
  nameEl.innerText = commentsData.name;
  nameDateEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("display-comments__date");
  dateEl.innerText = commentsData.date;
  nameDateEl.appendChild(dateEl);

  // add <div>
  // add    <p class="display-comments__text"></p>
  const divEl = document.createElement("div");
  contentEl.appendChild(divEl);

  const textEl = document.createElement("p");
  textEl.classList.add("display-comments__text");
  textEl.innerText = commentsData.text;
  divEl.appendChild(textEl);
}

function renderAllComments(allComments) {
  commentsContainer.innerHTML = "";

  allComments.forEach((comment) => {
    createCommentsCard(comment);
  });
}

renderAllComments(comments);

const commentsFormEl = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const newComment = {
    name: name,
    date: currentDate,
    text: comment,
    headshot: "grey circular object",
  };

  comments.unshift(newComment);
  renderAllComments(comments);

  commentsFormEl.reset();
});
