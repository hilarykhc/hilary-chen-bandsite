class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://project-1-api.herokuapp.com/";
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseUrl}comments?api_key=${this.apiKey}`
      );
      const displayComments = response.data.sort(
        (a, b) => b.timestamp - a.timestamp
      );

      const commentsContainer = document.querySelector(
        ".display-comments__container"
      );

      commentsContainer.innerHTML = "";

      displayComments.forEach((comment) => {
        createCommentCard(comment);
      });
    } catch (error) {
      console.error("Oh no! Failed", error);
    }
  }

  async postComment(comment) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${this.baseUrl}comments?api_key=${this.apiKey}`,
        comment,
        config
      );

      await this.getComments(); // Refresh comments after posting

      const commentsFormEl = document.getElementById("form");
      commentsFormEl.reset();
    } catch (error) {
      console.error("Uh-oh. Failed to post comment", error);
    }
  }
}

const apiKey = "6748bc1f-abe2-40ad-8213-f950811ead8f";
const bandSiteApi = new BandSiteApi(apiKey);

const commentsFormEl = document.getElementById("form");
commentsFormEl.addEventListener("submit", async function (event) {
  event.preventDefault();

  console.log("form submitted"); //ok

  //async function allComment() {
  try {
    const name = document.getElementById("name").value;
    const userComment = document.getElementById("comment").value;
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });

    const newComment = {
      name: name,
      //timestamp: currentDate,
      comment: userComment,
      //headshot: "grey circular object",
    };

    await bandSiteApi.postComment(newComment);
  } catch (error) {
    console.error("oopsies. Error", error);
  }
});

function createCommentCard(comment) {
  const commentsContainer = document.querySelector(
    ".display-comments__container"
  );

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
  nameEl.textContent = `${comment.name}`;
  nameDateEl.appendChild(nameEl);

  const dateEl = document.createElement("p");
  dateEl.classList.add("display-comments__date");
  const commentDate = new Date(comment.timestamp);
  const correctDate = commentDate.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  dateEl.textContent = correctDate;
  nameDateEl.appendChild(dateEl);

  const divEl = document.createElement("div");
  contentEl.appendChild(divEl);

  const textEl = document.createElement("p");
  textEl.classList.add("display-comments__text");
  textEl.textContent = `${comment.comment}`;
  divEl.appendChild(textEl);
}

bandSiteApi.getComments();
